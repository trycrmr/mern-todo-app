import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

// client
//   .query({
//     query: gql`
//       {
//         hello
//       }
//     `,
//   })
//   .then((result) => console.log(result));

const initialApp = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(initialApp, document.getElementById("root"));
