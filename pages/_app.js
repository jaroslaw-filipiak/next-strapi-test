import './../scss/oan.scss';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../lib/apollo';

export default function App({ Component, pageProps }) {
  return (
    <>
      <React.Fragment>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </React.Fragment>
    </>
  );
}
