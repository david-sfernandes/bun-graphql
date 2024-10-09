const books = [
  { id: 1, title: "Book A", type: "AUDIO" },
  { id: 2, title: "Book B", type: "LEGACY" },
];

const BooksCollection = {
  get(id: string | number) {
    const bid = typeof id === "string" ? parseInt(id, 10) : id;

    return books.find((u) => u.id === bid);
  },
  all() {
    return books;
  },
  add(title: string) {
    const book = {
      id: parseInt(Math.random().toString(10).substr(2), 10),
      title,
      type: "LEGACY",
    };

    books.push(book);

    return book;
  },
};

export { BooksCollection, books };
