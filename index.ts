import {
  createInlineSigningKeyProvider,
  useJWT,
} from "@graphql-yoga/plugin-jwt";
import { useSofa } from "@graphql-yoga/plugin-sofa";
import chalk from "chalk";
import { createYoga } from "graphql-yoga";
import SECRET from "./src/constant/secret";
import { schema } from "./src/schema";
import figlet from "figlet";

export const yoga = createYoga({
  schema,
  plugins: [
    useJWT({
      singingKeyProviders: [createInlineSigningKeyProvider(SECRET)],
      extendContext: true,
      reject: {
        missingToken: false,
        invalidToken: true,
      },
    }),
    useSofa({
      basePath: "/",
      swaggerUI: {
        endpoint: "/swagger",
      },
    }),
  ],
});

const PORT = Bun.env.PORT || 8081;

Bun.serve({
  port: PORT,
  fetch: yoga.fetch,
});

console.info(
  figlet.textSync("Terabyte", {
    font: "Standard",
    horizontalLayout: "default",
    verticalLayout: "default",
  })
);
console.info(
  chalk.green(`Server is running on http://localhost:${PORT}/graphql`)
);
