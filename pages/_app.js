import "../styles/globals.css";

import "tailwindcss/tailwind.css";
import "../component/search/search.css";
import "../component/content/index.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
