import 'normalize.css';
import GlobalCSS from '../styled/global.css';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEO />
      <GlobalCSS />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
