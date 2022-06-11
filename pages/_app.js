import 'normalize.css';
import GlobalCSS from '../styled/global.css';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styled/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <SEO />
      <GlobalCSS />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
