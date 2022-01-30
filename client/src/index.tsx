import {StrictMode} from "react";
import ReactDOM from "react-dom";
import {ApolloClient, ApolloProvider} from "@apollo/client";

import App from "./App";
import {cache} from "cache";
import {GRAPHQL_URL} from "config/paths";
import reportWebVitals from "./reportWebVitals";
import "./global.css";

const client = new ApolloClient({uri: GRAPHQL_URL, cache});

ReactDOM.render(
  <ApolloProvider client={client}>
    <StrictMode>
      <App />
    </StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

reportWebVitals();
