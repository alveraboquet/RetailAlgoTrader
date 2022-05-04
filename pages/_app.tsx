import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import { SessionProvider } from 'next-auth/react';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap')
      : null;
  }, []);

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
