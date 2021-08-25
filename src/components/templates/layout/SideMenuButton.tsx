import styles from "./SideMenuButton.module.scss";
import { getComponentTemplate } from "src/lib/component";

type Props = {
  onClick: () => void;
};

const SideMenuButton = getComponentTemplate(({ onClick }: Props) => (
  <button className={styles.button} onClick={onClick}>
    <img className={styles.logo} src="/img/logo.png" alt="ホームへ" />
  </button>
));

export default SideMenuButton;
