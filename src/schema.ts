import { GraphQLError } from "graphql";
import { applyMiddleware } from "graphql-middleware";
import { createSchema } from "graphql-yoga";
import jwt from "jsonwebtoken";
import permissions from "./auth/permissions";
import SECRET from "./constant/secret";
import type { GraphQLContext } from "./types/context";

const baseSchema = createSchema({
  typeDefs: /* GraphQL */ `
    type User {
      id: ID!
      email: String!
      name: String!
      role: String!
      password: String!
      createdAt: String!
      updatedAt: String!
    }

    type AuthPayload {
      token: String!
    }

    type Query {
      user(email: String!): User
      users: [User!]
      login(name: String!, password: String!): String
    }

    type Mutation {
      createUser(email: String, name: String!, password: String): User
    }

    schema {
      query: Query
      mutation: Mutation
    }
  `,
  resolvers: {
    Query: {
      async user(_: any, { email }: { email: string }, ctx: GraphQLContext) {
        return await ctx.prisma.user.findUnique({
          where: { email },
        });
      },
      async users(_: any, __: any, ctx: GraphQLContext) {
        return await ctx.prisma.user.findMany();
      },
      async login(
        _: any,
        { email, password }: { email: string; password: string },
        ctx
      ) {
        const user = await ctx.prisma.user.findUnique({
          where: { email },
        });
        if (!user || user?.password !== password)
          throw new GraphQLError("Unauthorized");

        const token = jwt.sign(
          {
            sub: user.id,
            name: user.name,
            scope: user.role,
          },
          SECRET,
          { expiresIn: "1d" }
        );

        return token;
      },
    },
    Mutation: {
      async createUser(
        _: any,
        {
          email,
          name,
          password,
        }: { email: string; name: string; password: string },
        ctx: GraphQLContext
      ) {
        return await ctx.prisma.user.create({
          data: {
            email,
            name,
            password,
          },
        });
      },
    },
  },
});

const schemaMiddleware = applyMiddleware(baseSchema, permissions);

export { schemaMiddleware as schema };
