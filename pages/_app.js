import { SessionProvider } from "next-auth/react";

import "../styles/normalize.css";
import "../styles/globals.css";
import "../styles/auth.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp;
