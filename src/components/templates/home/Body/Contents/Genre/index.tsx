import styles from "./index.module.scss";
import Viewer from "./Viewer";
import { ContentHead } from "src/lib/contents";

export type GenreParams = {
  title: string;
  heads: ContentHead[];
};

export default function Genre({ title, heads }: GenreParams): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>{title}</h2>
      </div>
      <div className={styles.viewer}>
        <Viewer heads={heads} />
      </div>
    </div>
  );
}
