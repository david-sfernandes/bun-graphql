import { books } from "./BooksCollection";

const users = [
  {
    id: 1,
    name: "User A",
    favoriteBook: books[0],
    password: "UserA",
    shelf: books,
  },
  {
    id: 2,
    name: "User B",
    favoriteBook: books[1],
    password: "UserB",
    shelf: books,
  },
  {
    id: 3,
    name: "admin",
    favoriteBook: books[1],
    password: "admin",
    shelf: books,
  },
];

const UsersCollection = {
  get(id: string | number) {
    const uid = typeof id === "string" ? parseInt(id, 10) : id;

    return users.find((u) => u.id === uid);
  },
  getByLogin(name: string, password: string) {
    return users.find((u) => u.name === name && u.password === password);
  },
  all() {
    return users;
  },
};

export { users, UsersCollection };

