import styles from "./index.module.scss";
import Background from "./Background";
import Title from "./Title";
import Body from "./Body";
import Contact from "./Contact";
import { getComponentTemplate } from "src/lib/component";

const About = getComponentTemplate(() => (
  <div className={styles.container}>
    <Background className={styles.background} />
    <div className={styles.content}>
      <Title className={styles.title} />
      <Body className={styles.body} />
      <Contact className={styles.contact} />
    </div>
  </div>
));

export default About;
