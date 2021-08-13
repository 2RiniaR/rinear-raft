import React from "react";
import styles from "./index.module.scss";
import About from "./About";
import { ContentHead } from "src/lib/contents";
import { getComponentTemplate } from "src/lib/component";
import Footer from "src/components/accessories/Footer";
import News from "src/components/templates/home/Body/News";
import Links from "src/components/templates/home/Body/Links";

export type BodyParams = {
  news: ContentHead[];
};

const Body = getComponentTemplate(({ news }: BodyParams) => (
  <div className={styles.container}>
    <About className={styles.about} />
    <News className={styles.news} news={news} />
    <Links className={styles.links} />
    <Footer className={styles.footer} />
  </div>
));

export default Body;
