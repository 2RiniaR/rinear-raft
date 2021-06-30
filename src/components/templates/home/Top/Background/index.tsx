import Image from "next/image";
import styles from "./index.module.scss";

export type BackgroundParams = {
  className?: string;
};

export default function Background({ className = "" }: BackgroundParams): JSX.Element {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.image}>
        <Image src="/top.jpg" layout="fill" objectFit="cover" priority={true} />
      </div>
    </div>
  );
}
