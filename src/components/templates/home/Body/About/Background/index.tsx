import Image from "next/image";
import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";

const Title = getComponentTemplate(() => (
  <div className={styles.container}>
    <Image className={styles.image} src="/logo4.png" layout="fill" objectFit="contain" objectPosition="top left" />
  </div>
));

export default Title;
