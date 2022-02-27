import {StrictMode} from "react";
import ReactDOM from "react-dom";
import {ApolloClient, ApolloProvider, HttpLink, split} from "@apollo/client";
import {getMainDefinition} from "@apollo/client/utilities";
import {GraphQLWsLink} from "@apollo/client/link/subscriptions";
import {createClient} from "graphql-ws";

import App from "./App";
import {cache} from "cache";
import {GRAPHQL_URL} from "config/paths";
import reportWebVitals from "./reportWebVitals";
import "./global.css";

const httpLink = new HttpLink({uri: GRAPHQL_URL});
const wsLink = new GraphQLWsLink(createClient({url: `ws://${GRAPHQL_URL}/subscriptions`}));

const link = split(
  ({query}) => {
    const definition = getMainDefinition(query);
    return definition.kind === "OperationDefinition" && definition.operation === "subscription";
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({link, cache});

ReactDOM.render(
  <ApolloProvider client={client}>
    <StrictMode>
      <App />
    </StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

reportWebVitals();
