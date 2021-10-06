import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { getMainDefinition } from "@apollo/client/utilities";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

import { WebSocketLink } from "@apollo/client/link/ws";
import { split, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://native-ewe-21.hasura.app/v1/graphql",
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret":
      "qS4OdF25H1ngtb9fFZOLBKqJGgdlMVTxFBI4gvM6TSov3DfL5VjUZKfFkYBBB2S4",
  },
});

const wsLink = new WebSocketLink({
  uri: "wss://native-ewe-21.hasura.app/v1/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "qS4OdF25H1ngtb9fFZOLBKqJGgdlMVTxFBI4gvM6TSov3DfL5VjUZKfFkYBBB2S4",
      },
    },
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
