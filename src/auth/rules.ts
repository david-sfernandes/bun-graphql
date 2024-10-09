import { rule } from "graphql-shield";
import extractPayload from "./extractPayload";

const isAdmin = rule()(async (_: any, __: any, ctx: any) => {
  let payload = ctx.jwt?.payload;
  if (!payload) {
    // Extract token from headers when using Sofa/RestAPI
    payload = extractPayload(ctx.request.headers.get("authorization"));
  }
  return payload?.name === "admin";
});

export { isAdmin };
