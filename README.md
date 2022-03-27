# Pizza GraphQL

Simple pizza [GraphQL](https://graphql.org/) monorepo application. The deployed client is available on [pizza-graphql.netlify.app](https://pizza-graphql.netlify.app/). GraphQL server is deployed to [pizza-graphql.herokuapp.com/graphql](https://pizza-graphql.herokuapp.com/graphqlhttps://pizza-graphql.netlify.app/).

Client:

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://facebook.github.io/create-react-app/)
- [Apollo Client](https://www.apollographql.com/docs/react/)

GraphQL Server:

- [Express](https://expressjs.com)
- [Graphql-yoga](https://github.com/dotansimha/graphql-yoga)
- [Graphql-tools/schema](https://www.npmjs.com/package/@graphql-tools/schema)

![main_screen](https://user-images.githubusercontent.com/26469650/141659346-7c278b1a-3f75-4fb2-b077-489d4f749367.png)

![shopping_card](https://user-images.githubusercontent.com/26469650/141659363-f281db12-eb02-4dbe-a93e-b4fb1caf5b18.png)

## Requirements

- NodeJS

## Local Installation

**Client:**

```
cd client
yarn
yarn start
```

Go to the client page: `localhost:3000`

**Server:**

```
cd server
npm install
npm run dev
```

Go to the GraphQL playground: `localhost:3001/graphql`

## Deployment

Client is React (CRA) app. Build the app and deploy to any server and set up the only requred variable:

```
REACT_APP_GRAPHQL_SERVER = graphql server url
```

GraphQL server doesn't require build step and can be deployed to any server. Set up CLIENT variable to point to the client URL:

```
CLIENT = client url
```
