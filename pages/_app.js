import '../styles/globals.scss';
import '../styles/pagination.scss';
import 'tailwindcss/tailwind.css';
import Layout from './Components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
