import '../styles/globals.scss';
import '../styles/pagination.scss';
import 'tailwindcss/tailwind.css';
import Layout from '../Components/layout';
import { Provider as AuthProvider } from 'next-auth/client';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <AuthProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
