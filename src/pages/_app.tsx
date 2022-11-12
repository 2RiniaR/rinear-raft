import React, { useEffect } from "react";
import { AppProps } from "next/app";
import "styles/default.scss";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    document.documentElement.style.setProperty("--vh", window.outerHeight / 100 + "px");
    return () => {
      document.documentElement.style.removeProperty("--vh");
    };
  }, []);

  return <Component {...pageProps} />;
};

export default App;
