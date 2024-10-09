// getUserById, getUserByLogin

const USERS = [
  {
    id: 1,
    name: "admin",
    password: "admin",
    favoriteBook: 1,
    shelf: [1, 2],
  },
  {
    id: 2,
    name: "user",
    password: "user",
    favoriteBook: 2,
    shelf: [1, 2],
  },
];

export default function getUserById(id: number) {
  return USERS.find((u) => u.id === id);
}

export function getUserByLogin(name: string, password: string) {
  return USERS.find((u) => u.name === name && u.password === password);
}
