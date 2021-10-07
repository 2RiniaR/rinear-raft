import styles from "./SideMenuButton.module.scss";
import StaticImage from "components/functions/image/StaticImage";
import menuButtonPic from "public/img/MenuButton.png";

type Props = {
  onClick: () => void;
};

const SideMenuButton = ({ onClick }: Props): JSX.Element => (
  <div className={styles.screen}>
    <button className={styles.button} onClick={onClick} name="ホームへ" aria-label="ホームへ">
      <StaticImage className={styles.logo} src={menuButtonPic} alt="ホームへ" />
    </button>
  </div>
);

export default SideMenuButton;
