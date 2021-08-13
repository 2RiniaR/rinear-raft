import React from "react";
import styles from "./index.module.scss";
import { assignClasses, getComponentTemplate } from "src/lib/component";
import PhantomNode from "src/components/parts/PhantomNode";

const Links = getComponentTemplate(() => (
  <div className={styles.container}>
    <PhantomNode className={assignClasses(styles.element, styles.talks)} active={false}>
      <h2 className={styles.title}>TALKS</h2>
      <p className={styles.description}>制作の裏話やアイデア、雑談など</p>
    </PhantomNode>
    <PhantomNode className={assignClasses(styles.element, styles.projects)} active={false}>
      <h2 className={styles.title}>PROJECTS</h2>
      <p className={styles.description}>プロジェクトや作品</p>
    </PhantomNode>
  </div>
));

export default Links;
