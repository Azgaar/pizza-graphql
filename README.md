# Pizza GraphQL

Simple pizza monorepo application using [Create React App](https://facebook.github.io/create-react-app/) and [Apollo Client](https://www.apollographql.com/docs/react/) for [GraphQL](https://graphql.org/).

[Express](https://expressjs.com) backend is prepared by [Daria Strokach](https://github.com/scarletcamomile/pizza-graphql-backend).

The application is available on [pizza-graphql.herokuapp.com](https://pizza-graphql.herokuapp.com/).

![main_screen](https://user-images.githubusercontent.com/26469650/141659346-7c278b1a-3f75-4fb2-b077-489d4f749367.png)

![shopping_card](https://user-images.githubusercontent.com/26469650/141659363-f281db12-eb02-4dbe-a93e-b4fb1caf5b18.png)

## Requirements

- NodeJS

## Local Installation of Client

```
cd client
yarn
yarn start
```

Go to the client page: `localhost:3000`

## Local Installation of Server

```
cd server
npm install
npm run dev
```

Go to the graphql playground: `localhost:3001/graphql`

## Deployment

The app is a monorepo, so client and server are deployed to the same Heroku app.

Express serves public files (`/public/images`), GraphQL backend (`/graphQL`) and client application (from root).

To deploy the application, make sure the following environment variables are set:

```
CLIENT = client url
PORT = port number
REACT_APP_SERVER_URI = server url
```
