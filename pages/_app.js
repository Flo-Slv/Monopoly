import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider
} from '@apollo/client';
import {cache} from '../helpers/graphql/cache';

import '../styles/normalize.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const client = new ApolloClient({
    cache,
    uri: 'http://localhost:3000/api/graphql',
  });
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <Head>
          <title>Monopoly (coding project)</title>
        </Head>
        <Component {...pageProps} />
      </ApolloProvider>
    </SessionProvider>
  );
}

export default MyApp;
