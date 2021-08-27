import React from "react";
import { AppProps } from "next/app";
import "../styles/global.scss";
import Layout from "src/components/templates/layout/Layout";

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
