import prisma from "@/db/prisma";
import {
  createInlineSigningKeyProvider,
  useJWT,
} from "@graphql-yoga/plugin-jwt";
import { useSofa } from "@graphql-yoga/plugin-sofa";
import chalk from "chalk";
import figlet from "figlet";
import { createYoga } from "graphql-yoga";
import SECRET from "./src/constant/secret";
import { dailyTask1, dailyTask2 } from "./src/cron/daily";
import monthlyTask from "./src/cron/monthly";
import weeklyTask from "./src/cron/weekly";
import schema from "./src/graphql/schema";

const yoga = createYoga({
  schema,
  context: { prisma: prisma },
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

dailyTask1.start();
dailyTask2.start();
monthlyTask.start();
weeklyTask.start();

console.info(
  figlet.textSync("Terabyte", {
    font: "Standard",
    horizontalLayout: "default",
    verticalLayout: "default",
  })
);
console.info(
  chalk.green(`GraphQL Server: http://localhost:${PORT}/graphql`),
  chalk.green(`\nREST Documentation: http://localhost:${PORT}/swagger`)
);
