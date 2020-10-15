import { ApolloClient, InMemoryCache } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";

const link = createHttpLink({
  uri:
    "https://w6tcrg3sb4.execute-api.us-east-1.amazonaws.com/example-example-graphql-api"
});

const authLink = setContext((_, { headers }) => {
  const authToken = "5152fa08-1806-4514-9f66-730e9b59486e";
  return {
    headers: {
      ...headers,
      authorization: authToken
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache()
});

export default client;
