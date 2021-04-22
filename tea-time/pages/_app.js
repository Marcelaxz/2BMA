import Layout from "../components/layout/layout";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <title> Tea Time! </title>
      <Component {...pageProps} />
    </Layout>
  );
}


export default MyApp
