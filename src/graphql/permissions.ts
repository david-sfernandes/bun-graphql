import { allow, shield } from "graphql-shield";

const permissions = shield(
  {
    Query: {
      "*": allow,
    },
    Mutation: {
      "*": allow,
    },
  },
  {
    fallbackError: "Sorry! Not Authorised.",
  }
);

export default permissions;
