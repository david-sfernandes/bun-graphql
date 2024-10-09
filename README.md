# bun-graphql

## Quickstart

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

or:

```bash
bun start
```

> For default this application run on port **8081**

## API UI and Docs

### GraphQL

For Yoga GraphQL Playground: [/graphql](http://localhost:8081/graphql)

### RestAPI/Swagger

For Swagger documentation: [/swagger](http://localhost:8081/swagger)

This project was created using `bun init` in bun v1.1.27. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## Examples
### Login example

```graphql
{
  login(name: "admin", password: "admin")
}
```