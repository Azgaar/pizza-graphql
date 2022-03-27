import {StrictMode} from "react";
import ReactDOM from "react-dom";
import {ApolloClient, ApolloProvider, split, HttpLink} from "@apollo/client";
import {getMainDefinition} from "@apollo/client/utilities";

import App from "./App";
import {cache} from "cache";
import {GRAPHQL_SERVER} from "config/paths";
import {SSELink} from "sseLink";
import reportWebVitals from "./reportWebVitals";
import "./global.css";

const httpLink = new HttpLink({uri: GRAPHQL_SERVER});
const sseLink = new SSELink({url: GRAPHQL_SERVER});

const link = split(
  ({query}) => {
    const definition = getMainDefinition(query);
    return definition.kind === "OperationDefinition" && definition.operation === "subscription";
  },
  sseLink,
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
