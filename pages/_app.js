import '../styles/globals.scss';
import '../styles/pagination.scss';
import '../styles/nprogress.css';
import 'tailwindcss/tailwind.css';
import { useState } from 'react';
import Router from 'next/router';
import nProgress from 'nprogress';
import Layout from '../Components/layout';
import { Provider as AuthProvider } from 'next-auth/client';
import Loading from '../Components/loading';


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [loading, setLoading] = useState(false);
  let content;

  Router.events.on('routeChangeStart', () => {
    nProgress.start();
    setLoading(true);
  });

  Router.events.on('routeChangeError', () => {
    nProgress.done();
    setLoading(false);
  });

  Router.events.on('routeChangeComplete', () => {
    nProgress.done();
    setLoading(false);
  });

  if (loading) {
    content = <Loading />;
  } else {
    content = (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }

  return (
    <AuthProvider session={session}>
      {content}
    </AuthProvider>
  );
}

export default MyApp;
