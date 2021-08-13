import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";
import { Content } from "src/lib/contents";

export type TopParams = {
  content: Content;
};

const Body = getComponentTemplate(({ content }: TopParams) => (
  <>
    {content.Page}
    <div className={styles.spacer} />
  </>
));

export default Body;
