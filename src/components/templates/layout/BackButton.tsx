import Link from "next/link";
import styles from "./BackButton.module.scss";
import { StaticImage } from "components/functions";
import backIconPic from "public/general/back-icon.png";

type Props = {
  href: string;
};

export const BackButton = ({ href }: Props): JSX.Element => (
  <div className={styles.screen}>
    <Link href={href} scroll={false}>
      <a className={styles.link}>
        <StaticImage className={styles.icon} src={backIconPic} alt="戻る" layout="responsive" />
      </a>
    </Link>
  </div>
);
