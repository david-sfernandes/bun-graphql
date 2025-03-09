export default async function hashPassword(password: string) {
  return await Bun.password.hash(password, {
    algorithm: "bcrypt",
    cost: 4,
  });
}
