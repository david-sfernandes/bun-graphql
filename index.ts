import { createSchema, createYoga } from 'graphql-yoga'
import { useSofa } from '@graphql-yoga/plugin-sofa'
 
const books = [
  { id: 1, title: 'Book A', type: 'AUDIO' },
  { id: 2, title: 'Book B', type: 'LEGACY' }
]
const users = [
  {
    id: 1,
    name: 'User A',
    favoriteBook: books[0],
    shelf: books
  },
  {
    id: 2,
    name: 'User B',
    favoriteBook: books[1],
    shelf: books
  }
]
 
const UsersCollection = {
  get(id: string | number) {
    const uid = typeof id === 'string' ? parseInt(id, 10) : id
 
    return users.find(u => u.id === uid)
  },
  all() {
    return users
  }
}
 
const BooksCollection = {
  get(id: string | number) {
    const bid = typeof id === 'string' ? parseInt(id, 10) : id
 
    return books.find(u => u.id === bid)
  },
  all() {
    return books
  },
  add(title: string) {
    const book = {
      id: parseInt(Math.random().toString(10).substr(2), 10),
      title,
      type: 'LEGACY'
    }
 
    books.push(book)
 
    return book
  }
}
 
const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Book {
      id: ID!
      title: String!
      type: BookType!
    }
 
    enum BookType {
      AUDIO
      LEGACY
    }
 
    type User {
      id: ID!
      name: String!
      favoriteBook: Book!
      shelf: [Book!]!
    }
 
    type Query {
      user(id: ID!): User
      users: [User!]
      book(id: ID!): Book
      books: [Book!]
    }
 
    type Mutation {
      addBook(title: String!): Book
    }
 
    schema {
      query: Query
      mutation: Mutation
    }
  `,
  resolvers: {
    Query: {
      user(_: any, { id }: any) {
        return UsersCollection.get(id)
      },
      users() {
        return UsersCollection.all()
      },
      book(_: any, { id }: any) {
        return BooksCollection.get(id)
      },
      books() {
        return BooksCollection.all()
      }
    },
    Mutation: {
      addBook(_: any, { title }: any) {
        const book = BooksCollection.add(title)
        return book
      }
    }
  }
})
 
export const yoga = createYoga({
  schema,
  plugins: [
    useSofa({
      basePath: '/rest',
      swaggerUI: {
        endpoint: '/swagger',
      },
    })
  ]
})

Bun.serve({
  port: 4000,
  fetch: yoga.fetch,
})

console.info('Server is running on http://localhost:4000/graphql')
