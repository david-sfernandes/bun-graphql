import { rule } from "graphql-shield";
import extractPayload from "../utils/auth/extractPayload";

const mainRoles: Role[] = ["ADMIN", "MANAGER", "CLIENT", "TECHNICIAN"];

const getPayload = (ctx: any) => {
  let payload = ctx.jwt?.payload;
  if (!payload) {
    // Extract token from headers when using Sofa/RestAPI
    payload = extractPayload(ctx.request.headers.get("authorization"));
  }
  ctx.request.headers.set("clients", payload?.clients);
  return payload;
};

const isAdmin = rule()(async (_: any, __: any, ctx: any) => {
  let payload = getPayload(ctx);
  return payload?.scope === "ADMIN";
});

const isAuthorized = rule()(async (_: any, __: any, ctx: any) => {
  let payload = getPayload(ctx);
  return payload && payload.scope && mainRoles.includes(payload.scope);
});

const isManager = rule()(async (_: any, __: any, ctx: any) => {
  let payload = getPayload(ctx);
  return payload?.scope === "MANAGER";
});

const isBot = rule()(async (_: any, __: any, ctx: any) => {
  let payload = getPayload(ctx);
  return payload?.scope === "BOT";
});

const isClient = rule()(async (_: any, __: any, ctx: any) => {
  let payload = getPayload(ctx);
  return payload?.scope === "CLIENT";
});

const isTechnician = rule()(async (_: any, __: any, ctx: any) => {
  let payload = getPayload(ctx);
  return payload?.scope === "TECHNICIAN";
});

export { isAdmin, isAuthorized, isBot, isClient, isManager, isTechnician };
