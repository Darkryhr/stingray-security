import 'normalize.css';
import GlobalCSS from '../styled/global.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalCSS />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
