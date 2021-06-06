import React from "react";
import Head from "next/head";

const Layout: React.FC = ({ children }) => (
  <>
    <Head>
      <title>RineaR</title>
      <link rel="stylesheet" href="https://use.typekit.net/swm7wqw.css" />
    </Head>
    {children}
  </>
);

export default Layout;
