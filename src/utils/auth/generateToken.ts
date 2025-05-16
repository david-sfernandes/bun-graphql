import prisma from "@/db/prisma";
import validatePassword from "./validatePassword";
import SECRET from "@/constant/secret";
import jwt from "jsonwebtoken";

export default async function generateToken(email: string, pass: string, daysDuration: number) {
  if (email.trim() === "" || pass.trim() === "") {
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
    { expiresIn: `${daysDuration}d` },
  );

  const resp = {
    token,
    user: email,
    expireAt: new Date(Date.now() + daysDuration * 24 * 60 * 60 * 1000).toISOString(),
  };

  return resp;
}