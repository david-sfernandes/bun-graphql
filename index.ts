import {
  createInlineSigningKeyProvider,
  useJWT
} from "@graphql-yoga/plugin-jwt";
import { useSofa } from "@graphql-yoga/plugin-sofa";
import { GraphQLError } from "graphql";
import { createSchema, createYoga } from "graphql-yoga";
import jwt from "jsonwebtoken";
import { getUserByLogin } from "./db";

const signingKey = "SECRET";

const books = [
  { id: 1, title: "Book A", type: "AUDIO" },
  { id: 2, title: "Book B", type: "LEGACY" },
];
const users = [
  {
    id: 1,
    name: "User A",
    favoriteBook: books[0],
    shelf: books,
  },
  {
    id: 2,
    name: "User B",
    favoriteBook: books[1],
    shelf: books,
  },
];

const UsersCollection = {
  get(id: string | number) {
    const uid = typeof id === "string" ? parseInt(id, 10) : id;

    return users.find((u) => u.id === uid);
  },
  all() {
    return users;
  },
};

const BooksCollection = {
  get(id: string | number) {
    const bid = typeof id === "string" ? parseInt(id, 10) : id;

    return books.find((u) => u.id === bid);
  },
  all() {
    return books;
  },
  add(title: string) {
    const book = {
      id: parseInt(Math.random().toString(10).substr(2), 10),
      title,
      type: "LEGACY",
    };

    books.push(book);

    return book;
  },
};

const schema = createSchema({
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
        const user = getUserByLogin(name, password);

        if (!user) {
          throw new GraphQLError("Unauthorized");
        }

        const token = jwt.sign(
          {
            sub: user.id,
            name: user.name,
          },
          signingKey,
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

export const yoga = createYoga({
  schema,
  plugins: [
    useSofa({
      basePath: "/",
      swaggerUI: {
        endpoint: "/swagger",
      },
    }),
    useJWT({
      // Configure your signing providers: either a local signing-key or a remote JWKS are supported.
      singingKeyProviders: [createInlineSigningKeyProvider(signingKey)],
      // Configure context injection after the token is verified.
      // By default, the plugin will inject the token's payload into the context into the `jwt` field.
      // You can pass a string: `"myJwt"` to change the field name.
      extendContext: true,
      // The plugin can reject the request if the token is missing or invalid (doesn't pass JWT `verify` flow).
      // By default, the plugin will reject the request if the token is missing or invalid.
      reject: {
        missingToken: false,
        invalidToken: true,
      },
    }),
  ],
});

Bun.serve({
  port: 8081,
  fetch: yoga.fetch,
});

console.info("Server is running on http://localhost:8081/graphql");
