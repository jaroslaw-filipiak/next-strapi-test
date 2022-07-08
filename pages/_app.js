import './../scss/oan.scss';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../lib/apollo';
import React, { useEffect, useState } from 'react';

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

NProgress.configure({
  template: `<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>`,
});

//Binding events.
Router.events.on('routeChangeStart', () => {
  console.log('route change start');
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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
