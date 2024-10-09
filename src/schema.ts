import { GraphQLError } from "graphql";
import { applyMiddleware } from "graphql-middleware";
import { createSchema } from "graphql-yoga";
import jwt from "jsonwebtoken";
import permissions from "./auth/permissions";
import { BooksCollection } from "./db/BooksCollection";
import { UsersCollection } from "./db/UsersCollection";
import SECRET from "./constant/secret";

const baseSchema = createSchema({
  typeDefs: /* GraphQL */ `
    type Book {
      id: ID!
      title: String!
      type: BookType!
    }

    enum BookType {
      AUDIO
      LEGACY
    }

    type User {
      id: ID!
      name: String!
      password: String!
      favoriteBook: Book!
      shelf: [Book!]!
    }

    type Viewer {
      id: ID!
      name: String!
    }

    type AuthPayload {
      token: String!
    }

    type Query {
      user(id: ID!): User
      users: [User!]
      book(id: ID!): Book
      books: [Book!]
      viewer: Viewer
      login(name: String!, password: String!): String
    }

    type Mutation {
      addBook(title: String!): Book
    }

    schema {
      query: Query
      mutation: Mutation
    }
  `,
  resolvers: {
    Query: {
      viewer: async (_: any, __: any, { jwt }: any) => {
        if (!jwt) {
          throw new GraphQLError("Unauthorized");
        }

        return {
          id: jwt.payload.sub,
          name: jwt.payload.name,
        };
      },
      user(_: any, { id }: any) {
        return UsersCollection.get(id);
      },
      users() {
        return UsersCollection.all();
      },
      book(_: any, { id }: any) {
        return BooksCollection.get(id);
      },
      books() {
        return BooksCollection.all();
      },
      login(_: any, { name, password }: { name: string; password: string }) {
        const user = UsersCollection.getByLogin(name, password);

        if (!user) throw new GraphQLError("Unauthorized");

        const token = jwt.sign(
          {
            sub: user.id,
            name: user.name,
          },
          SECRET,
          { expiresIn: "1d" }
        );

        return token;
      },
    },
    Mutation: {
      addBook(_: any, { title }: any) {
        const book = BooksCollection.add(title);
        return book;
      },
    },
  },
});

const schemaMiddleware = applyMiddleware(baseSchema, permissions);

export { schemaMiddleware as schema };
