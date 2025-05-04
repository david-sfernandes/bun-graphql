import { parseArgs } from "node:util";
import hashPassword from "./utils/auth/hashPassword";
import prisma from "./db/prisma";
import validatePassword from "./utils/auth/validatePassword";
import SECRET from "./constant/secret";
import { createInlineSigningKeyProvider, useJWT } from "@graphql-yoga/plugin-jwt";
import jwt from 'jsonwebtoken';

const { values } = parseArgs({
  args: Bun.argv,
  options: {
    user: {
      type: 'string',
    },
    pass: {
      type: 'string',
    },
  },
  strict: true,
  allowPositionals: true,
});

async function generateToken(email?: string, pass?: string) {
  if (!email || !pass) {
    console.error("Missing parameters to generate token. Insert a valid user and password.");
    return;
  };

  const user = await prisma.user.findUnique({
    where: { email },
    include: { clients: true },
  });
  const isPasswordValid = await validatePassword(user, pass);

  if (!isPasswordValid || !user?.isActive) {
    console.error("Invalid credentials.");
    return;
  }
  if (user.role !== "BOT") {
    console.error("User is not a bot.");
    return;
  }

  const token = jwt.sign(
    {
      sub: user?.id,
      name: user?.name,
      scope: user?.role,
      clients: user?.clients.map((client) => client.id),
    },
    SECRET,
    { expiresIn: "365d" },
  );

  const resp = {
    token,
    user: email,
    expireAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
  };

  console.log(resp);
}

generateToken(values.user, values.pass)
