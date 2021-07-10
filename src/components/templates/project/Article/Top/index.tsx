import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";
import { Content } from "src/lib/contents";

export type AbstractParams = {
  content: Content;
};

const Abstract = getComponentTemplate(({ content }: AbstractParams) => (
  <div className={styles.container}>
    <div className={styles.content}>
      <h2>aaa</h2>
    </div>
  </div>
));

export default Abstract;
