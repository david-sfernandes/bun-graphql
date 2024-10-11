import { loadFiles } from "@graphql-tools/load-files";
import { applyMiddleware } from "graphql-middleware";
import { createSchema } from "graphql-yoga";
import permissions from "./permissions";

const baseSchema = createSchema({
  typeDefs: await loadFiles("./**/*.graphql"),
  resolvers: await loadFiles("./**/resolvers.ts"),
});

const schema = applyMiddleware(baseSchema, permissions);

export default schema;
