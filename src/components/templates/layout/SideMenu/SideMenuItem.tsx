import Link from "next/link";
import styles from "./SideMenuItem.module.scss";
import StaticImage from "components/functions/image/StaticImage";

export type SideMenuItemProps = {
  href: string;
  markSrc: StaticImageData;
  name: string;
};

const SideMenuItem = ({ href, markSrc, name }: SideMenuItemProps): JSX.Element => (
  <Link href={href}>
    <a className={styles.element}>
      <div className={styles.logo}>
        <StaticImage src={markSrc} alt={name} />
      </div>
      <h2 className={styles.title}>{name}</h2>
    </a>
  </Link>
);

export default SideMenuItem;
