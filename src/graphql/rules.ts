import { rule } from "graphql-shield";
import extractPayload from "../utils/auth/extractPayload";
import type { GraphQLContext } from "@/types/context";

const mainRoles: Role[] = ["ADMIN", "MANAGER", "CLIENT", "TECHNICIAN"];

const getPayload = (ctx: GraphQLContext) => {
  let payload = ctx.jwt?.payload;
  if (!payload) {
    // Extract token from headers when using Sofa/RestAPI
    payload = extractPayload(
      `${ctx.request.headers.get("authorization")}`,
    ) as JwtPayload;
  }
  ctx.request.headers.set("clients", payload?.clients?.join(","));
  return payload;
};

const isAdmin = rule()(async (_: unknown, __: unknown, ctx: GraphQLContext) => {
  const payload = getPayload(ctx);
  return payload?.scope === "ADMIN";
});

const isAuthorized = rule()(
  async (_: unknown, __: unknown, ctx: GraphQLContext) => {
    const payload = getPayload(ctx);
    return payload?.scope && mainRoles.includes(payload.scope);
  },
);

const isManager = rule()(
  async (_: unknown, __: unknown, ctx: GraphQLContext) => {
    const payload = getPayload(ctx);
    return payload?.scope === "MANAGER";
  },
);

const isBot = rule()(async (_: unknown, __: unknown, ctx: GraphQLContext) => {
  const payload = getPayload(ctx);
  return payload?.scope === "BOT";
});

const isClient = rule()(
  async (_: unknown, __: unknown, ctx: GraphQLContext) => {
    const payload = getPayload(ctx);
    return payload?.scope === "CLIENT";
  },
);

const isTechnician = rule()(
  async (_: unknown, __: unknown, ctx: GraphQLContext) => {
    const payload = getPayload(ctx);
    return payload?.scope === "TECHNICIAN";
  },
);

export { isAdmin, isAuthorized, isBot, isClient, isManager, isTechnician };
