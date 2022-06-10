import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import { SessionProvider } from 'next-auth/react';

// Top level component for Next that initializes pages
// https://nextjs.org/docs/advanced-features/custom-app
const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  // Loads bootstrap files on initial startup
  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap')
      : null;
  }, []);

  return (
    // Wrap in SessionProvider from NextJs. Allows session to be passed through pages
    // https://next-auth.js.org/getting-started/client#sessionprovider
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
