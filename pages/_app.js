import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';

import '../styles/normalize.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Monopoly (coding project)</title>
        <meta
          name="description"
          content="Monopoly online game - Final project of MikeCodeur's bootcamp August/September 2022"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
