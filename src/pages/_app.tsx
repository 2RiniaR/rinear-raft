import React from "react";
import { AppProps } from "next/app";
import "../styles/default.scss";
import Layout from "src/components/templates/layout/Layout";
import DebugTool from "src/components/debug/DebugTool";

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Layout>
    <Component {...pageProps} />
    <DebugTool />
  </Layout>
);

export default App;
