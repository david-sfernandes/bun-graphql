import { allow, and, not, or, shield } from "graphql-shield";
import { isAdmin, isAuthorized, isBot, isManager } from "./rules";

const permissions = shield({
  Query: {
    users: isAdmin,
    invites: isAdmin,
    login: allow,
    securityEvents: and(isAuthorized, not(isBot)),
    microsoftAccount: and(isAuthorized, not(isBot)),
    microsoftSubscribedSku: and(isAuthorized, not(isBot)),
    client: and(isAuthorized, not(isBot)),
    clients: and(isAuthorized, not(isBot)),
    devices: and(isAuthorized, not(isBot)),
    device: and(isAuthorized, not(isBot)),
    tickets: and(isAuthorized, not(isBot)),
  },
  Mutation: {
    createUser: isAdmin,
    createInvite: or(isAdmin, isManager),
    createUserWithInvite: allow,
    updatePassword: and(isAuthorized, not(isBot)),
    createRecomendation: or(isAdmin, isManager),
    createDisclaimer: or(isAdmin, isManager),
    updateRecomendation: or(isAdmin, isManager),
    updateDisclaimer: or(isAdmin, isManager),
    deleteRecomendation: or(isAdmin, isManager),
    deleteDisclaimer: or(isAdmin, isManager),
    updateMSAccounts: isBot,
    updateMSSubscribedSkus: or(isBot, isAdmin),
    updateClient: or(isAdmin, isManager),
  },
});

export default permissions;
