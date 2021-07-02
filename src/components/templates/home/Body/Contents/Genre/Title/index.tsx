import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";

export type TitleParams = {
  text: string;
  color: string;
};

const Title = getComponentTemplate(({ text, color }: TitleParams) => (
  <h2 className={styles.text} style={{ color: color, borderColor: color }}>
    {text}
  </h2>
));

export default Title;
