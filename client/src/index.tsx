import {StrictMode} from "react";
import ReactDOM from "react-dom";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./global.css";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
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
