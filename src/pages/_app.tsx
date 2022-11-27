import React from "react";
import { AppProps } from "next/app";
import "styles/default.scss";

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default App;
