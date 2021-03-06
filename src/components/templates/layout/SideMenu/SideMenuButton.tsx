import styles from "./SideMenuButton.module.scss";
import { StaticImage } from "components/functions";
import menuIconPic from "public/general/menu-icon.png";

type Props = {
  onClick: () => void;
};

export const SideMenuButton = ({ onClick }: Props): JSX.Element => (
  <div className={styles.screen}>
    <button className={styles.button} onClick={onClick} name="ホームへ" aria-label="ホームへ">
      <StaticImage className={styles.logo} src={menuIconPic} alt="ホームへ" layout="responsive" />
    </button>
  </div>
);
