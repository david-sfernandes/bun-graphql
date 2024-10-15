import { rule } from "graphql-shield";
import extractPayload from "../auth/extractPayload";

const getPayload = (ctx: any) => {
  let payload = ctx.jwt?.payload;
  if (!payload) {
    // Extract token from headers when using Sofa/RestAPI
    payload = extractPayload(ctx.request.headers.get("authorization"));
  }
  return payload;
};

const isAdmin = rule()(async (_: any, __: any, ctx: any) => {
  let payload = getPayload(ctx);
  return payload?.role === "ADMIN";
});

const isAuthorized = rule()(async (_: any, __: any, ctx: any) => {
  let payload = getPayload(ctx);
  return !!payload;
});

const isManager = rule()(async (_: any, __: any, ctx: any) => {
  let payload = getPayload(ctx);
  return payload?.role === "MANAGER";
});

const isClient = rule()(async (_: any, __: any, ctx: any) => {
  let payload = getPayload(ctx);
  return payload?.role === "CLIENT";
});

export { isAdmin, isAuthorized, isClient, isManager };

