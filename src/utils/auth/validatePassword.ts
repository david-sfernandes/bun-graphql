export default async function validatePassword(
  user: PrismaUser | null,
  password: string
) {
  if (!user) return false;
  const isPasswordValid = await Bun.password.verify(
    password,
    user.password,
    "bcrypt"
  );
  return isPasswordValid;
}
