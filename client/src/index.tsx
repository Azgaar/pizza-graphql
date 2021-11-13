import {StrictMode} from "react";
import ReactDOM from "react-dom";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

import App from "./App";
import {GRAPHQL_URL} from "config/paths";
import reportWebVitals from "./reportWebVitals";
import "./global.css";

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <StrictMode>
      <App />
    </StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

reportWebVitals();
