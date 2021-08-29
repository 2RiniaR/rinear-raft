import styles from "./SideMenuButton.module.scss";

type Props = {
  onClick: () => void;
};

const SideMenuButton = ({ onClick }: Props): JSX.Element => (
  <button className={styles.button} onClick={onClick}>
    <img className={styles.logo} src="/img/MenuButton.png" alt="ホームへ" />
  </button>
);

export default SideMenuButton;
