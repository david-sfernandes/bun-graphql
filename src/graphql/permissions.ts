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
);

export default permissions;
