import Image from "next/image";
import styles from "./Top.module.scss";

export default function Top(): JSX.Element {
  return (
    <div>
      <div className={styles.imageContainer}>
        <Image src="/test4.jpg" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
