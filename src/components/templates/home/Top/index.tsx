import Image from "next/image";
import styles from "./index.module.scss";

export default function Top(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/test4.jpg" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
