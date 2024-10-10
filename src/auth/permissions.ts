import { allow, shield } from "graphql-shield";
import { isAdmin } from "./rules";

const permissions = shield(
  {
    Query: {
      "*": allow,
      // users: isAdmin,
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
