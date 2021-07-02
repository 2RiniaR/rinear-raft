import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";

const Body = getComponentTemplate(() => (
  <div className={styles.container}>
    <p>内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1</p>
    <p>内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2</p>
    <p>内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3</p>
    <p>内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4</p>
    <p>内容5内容5内容5内容5内容5内容5内容5内容5内容5内容5</p>
  </div>
));

export default Body;
