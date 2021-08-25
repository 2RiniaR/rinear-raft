import React, { useState } from "react";
import Head from "next/head";
import styles from "./Layout.module.scss";
import SideMenuButton from "src/components/templates/layout/SideMenuButton";
import TopButton from "src/components/templates/layout/TopButton";
import SideMenu from "src/components/templates/layout/SideMenu";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
  const [sideMenuOpened, setSideMenuOpened] = useState(false);

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(d) {
                var config = {
                  kitId: 'kvy7hzy',
                  scriptTimeout: 3000,
                  async: true
                },
                h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\\bwf-loading\\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
              })(document);
            `
          }}
        />
        <title />
      </Head>
      {children}
      <SideMenuButton className={styles.sideMenuButton} onClick={() => setSideMenuOpened(true)} />
      <TopButton className={styles.topButton} />
      <SideMenu className={styles.sideMenu} open={sideMenuOpened} setOpen={setSideMenuOpened} />
    </>
  );
};

export default Layout;
