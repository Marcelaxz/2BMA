import Design from "../components/layout/Design";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Design>
      <Component {...pageProps} />
    </Design>
  );
}


export default MyApp
