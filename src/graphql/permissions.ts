import { allow, and, not, shield } from "graphql-shield";
import { isAdmin, isAuthorized, isBot, isManager } from "./rules";

const permissions = shield(
  {
    Query: {
      "user": and(isAdmin, isManager),
      "login": allow,
      "securityEvents": and(isAuthorized, not(isBot)),
      "microsoftAccount": and(isAuthorized, not(isBot)),
      "microsoftSubscribedSku": and(isAuthorized, not(isBot)),
      "client": and(isAuthorized, not(isBot)),
      "clients": and(isAuthorized, not(isBot)),
      "devices": and(isAuthorized, not(isBot)),
      "device": and(isAuthorized, not(isBot)),
      "tickets": and(isAuthorized, not(isBot)),
    },
    Mutation: {
      "createUser": isAdmin,
      "createInvite": and(isAdmin, isManager),
      "createUserWithInvite": allow,
      "updatePassword": and(isAuthorized, not(isBot)),
      "createRecomendation": and(isAdmin, isManager),
      "createDisclaimer": and(isAdmin, isManager),
      "updateRecomendation": and(isAdmin, isManager),
      "updateDisclaimer": and(isAdmin, isManager),
      "deleteRecomendation": and(isAdmin, isManager),
      "deleteDisclaimer": and(isAdmin, isManager),
      "updateMSAccounts": and(isBot, isAdmin),
      "updateMSSubscribedSkus": and(isBot, isAdmin),
      "updateClient": and(isAdmin, isManager),
    },
  },
);

export default permissions;
