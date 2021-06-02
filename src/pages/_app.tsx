import { AppProps } from "next/app";
import "../globals.css";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default App;
