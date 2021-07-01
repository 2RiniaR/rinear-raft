import Image from "next/image";
import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";

const Background = getComponentTemplate(() => (
  <>
    <div className={styles.image}>
      <Image src="/top.jpg" layout="fill" objectFit="cover" priority={true} />
    </div>
    <div className={styles.mask} />
  </>
));

export default Background;
