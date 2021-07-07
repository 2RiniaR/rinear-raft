import styles from "./index.module.scss";
import Background from "./Background";
import Top from "./Top";
import Body from "./Body";
import { getComponentTemplate } from "src/lib/component";
import { Content } from "src/lib/contents";

export type ArticleParams = {
  content: Content;
};

const Article = getComponentTemplate(({ content }: ArticleParams) => (
  <div className={styles.container}>
    <Background className={styles.background} />
    <div className={styles.content}>
      <Top className={styles.top} content={content} />
      <Body className={styles.body} content={content} />
    </div>
  </div>
));

export default Article;
