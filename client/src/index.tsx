import {StrictMode} from "react";
import ReactDOM from "react-dom";
import {ApolloClient, ApolloProvider, split, HttpLink} from "@apollo/client";
import {getMainDefinition} from "@apollo/client/utilities";
import {WebSocketLink} from "@apollo/link-ws";

import App from "./App";
import {cache} from "cache";
import {GRAPHQL_URL} from "config/paths";
import reportWebVitals from "./reportWebVitals";
import "./global.css";

const httpLink = new HttpLink({uri: GRAPHQL_URL});
const wsLink = new WebSocketLink({uri: `ws://${GRAPHQL_URL}`, options: {reconnect: true}});

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
