import { ApolloProvider } from "@apollo/client";
import React from "react";
import "./App.css";
import client from "./graphql/apollo";
import Routes from "./route/route";

const App = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

export default App;
