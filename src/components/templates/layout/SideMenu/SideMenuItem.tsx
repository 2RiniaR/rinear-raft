import Link from "next/link";
import { StaticImageData } from "next/image";
import styles from "./SideMenuItem.module.scss";
import { StaticImage } from "components/functions";

export type SideMenuItemProps = {
  href: string;
  markSrc: StaticImageData;
  name: string;
  onClick: () => void;
};

export const SideMenuItem = ({ href, markSrc, name, onClick }: SideMenuItemProps): JSX.Element => (
  <Link href={href}>
    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
    <a className={styles.element} onClick={onClick} role="link" tabIndex={0}>
      <div className={styles.logo}>
        <StaticImage src={markSrc} alt={name} layout="responsive" />
      </div>
      <h2 className={styles.title}>{name}</h2>
    </a>
  </Link>
);
