import Image from "next/image";
import styles from "./index.module.scss";

export default function Background(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src="/test2.jpg" layout="fill" objectFit="cover" priority={true} />
      </div>
      <div className={styles.mask} />
    </div>
  );
}
