import './../scss/oan.scss';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../lib/apollo';
import React from 'react';

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </React.Fragment>
  );
}
