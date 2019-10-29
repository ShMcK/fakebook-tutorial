# FakeBook API 

A social network API built with Apollo & GraphQL.

## Setup

Open a terminal in the project directory and run:

```shell
npm run start
```

Code should be compiled on the fly from TypeScript using [ts-node](https://github.com/TypeStrong/ts-node). The server uses [nodemon](https://nodemon.io/) to update on changes.

Once configured, the server should be available at `http://localhost:3000/graphql`.

## Tests

Run tests using [Jest](https://jestjs.io/).

```shell
npm run test
```

## Deploy

To run build and run a production server:

```shell
npm run build
npm run prod:start
```

The command will compile the TS files into JS, and copy your graphql files into the built project in the `dist` folder.

## Credit

Brought to you by CodeRoad :)