# Bun GraphQL

A API made with GraphQL Yoga and Bun. This project also use Sofa API to generate a RestAPI based on GraphQL Schema.

This project was created using `bun init` in bun v1.1.27. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

- [Quickstart](#quickstart)
- [API Documentation](#api-documentation)
- [Prisma](#prisma)
- [Examples](#examples)
- [Deploy](#deploy)

[![Tecnologias Utilizadas](https://skillicons.dev/icons?i=js,ts,bun,graphql,prisma&theme=dark)](https://skillicons.dev)


## Quickstart

To install all dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

or:

```bash
bun dev
```
To deploy this application see [Deploy section](#deploy)

> ### Note
> For default this application run on port **8081**

## API Documentation

When tha application start up, the API documentation will be avaliable and can be accessed in the followin ways.

### GraphQL

For Yoga GraphQL Documentatio and Playground: [8081/graphql](http://localhost:8081/graphql)

### RestAPI/Swagger

For Swagger documentation: [8081/swagger](http://localhost:8081/swagger)

## Prisma

Prisma provides the best experience for your team to work and interact with databases. Even complex things like connection pooling, caching, real-time database subscriptions are a breeze with our products.
Build your application, fortify to make everything run smoothly, and grow with your users and requirements.

> ### Note
> The default database/datasouce used in this project is PostgreSQL


### Migration

The following command will sync the schema with the database.
```bash
bunx prisma migrate dev --name init
```
It will generate a *Prisma Client* to access your data on the application.

To apply schema changes, run the migrate commant with another `--name` value.

### Generate

Behind the scenes, when you are using Prisma, it generates files to /node_modules/@prisma/client, so every time you use the PrismaClient, you get a tailor-made type that matches your models.

You can also generate the Prisma Client manually if it is not up-to-date, by running the following command in your terminal:
```bash
bunx prisma generate
```

### Prisma Studio

Prisma have a integrated interface where you can quickly have a look at the data of your local database and check if your app is working correctly.

Interact with your Data with full CRUD functionality.

View your data any way you want by filtering, sorting and paginating it.

To start Prisma Studio just use the command:
```bash
bunx prisma studio
```

Prisma Studio will be up on http://localhost:5555

## Examples

### Login example with GraphQL

```js
{
  login(name: "username", password: "password")
}
```

## Deploy
```bash
# To install dependecies in production mode
bun i --production

# To generate prisma client
bunx prisma generate

#To build the a single file application
bun run build

# To start server
bun start
```
