import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'https://ct-be.dev.softgorillas.com/graphql',
  cache: new InMemoryCache(),
});

export default apolloClient;
