import styles from "./index.module.scss";
import Viewer from "./Viewer";
import Background from "./Background";
import { ContentHead } from "src/lib/contents";
import { getComponentTemplate } from "src/lib/component";

export type GenreParams = {
  title: string;
  heads: ContentHead[];
};

const Genre = getComponentTemplate(({ title, heads }: GenreParams) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <h2 className={styles.text}>{title}</h2>
    </div>
    <div className={styles.content}>
      <Background className={styles.background} />
      <Viewer className={styles.viewer} heads={heads} />
    </div>
  </div>
));

export default Genre;
