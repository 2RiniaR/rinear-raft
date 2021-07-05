import React from "react";
import Head from "next/head";
import Top from "./Top";
import Body from "./Body";
import styles from "./index.module.scss";
import { TalkContentHead, ProjectContentHead } from "src/lib/contents";

export type HomePageTemplateParams = {
  talks: TalkContentHead[];
  projects: ProjectContentHead[];
};

export default function HomePageTemplate({ talks, projects }: HomePageTemplateParams): JSX.Element {
  return (
    <div className={styles.page}>
      <Head>
        <title>RineaR</title>
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
      </Head>
      <Top className={styles.top} />
      <Body className={styles.body} talks={talks} projects={projects} />
    </div>
  );
}
