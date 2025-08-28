import { parseArgs } from "node:util";
import generateToken from "./utils/auth/generateToken";

const { values } = parseArgs({
  args: Bun.argv,
  options: {
    user: {
      type: "string",
    },
    pass: {
      type: "string",
    },
  },
  strict: true,
  allowPositionals: true,
});

async function run(user?: string, pass?: string) {
  if (!user || !pass) {
    console.error(
      "Missing parameters to generate token. Insert a valid user and password.",
    );
    return;
  }
  const token = await generateToken(user, pass, 365);
  console.log(token);
}

run(values.user, values.pass);
