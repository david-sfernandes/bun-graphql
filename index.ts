import {
  createInlineSigningKeyProvider,
  useJWT,
} from "@graphql-yoga/plugin-jwt";
import { useSofa } from "@graphql-yoga/plugin-sofa";
import chalk from "chalk";
import figlet from "figlet";
import { createYoga } from "graphql-yoga";
import cron from "node-cron";
import SECRET from "./src/constant/secret";
import { createContext } from "./src/graphql/context";
import schema from "./src/graphql/schema";
import SourceFacade from "./src/sources/source.facade";

const yoga = createYoga({
  schema,
  context: createContext,
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
      depthLimit: 7,
      swaggerUI: {
        endpoint: "/swagger",
        defaultModelExpandDepth: 3,
      },
    }),
  ],
});

const PORT = Bun.env.PORT || 8081;

Bun.serve({
  port: PORT,
  fetch: yoga.fetch,
});

cron.schedule(
  "0 1 * * *",
  async () => {
    const terabyteSource = new SourceFacade();
    await terabyteSource.syncAll();
  },
  {
    timezone: "America/Sao_Paulo",
  }
);

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
