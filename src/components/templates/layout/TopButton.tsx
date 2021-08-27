import styles from "./TopButton.module.scss";

type Props = {
  onClick: () => void;
};

const TopButton = ({ onClick }: Props): JSX.Element => (
  <button className={styles.button} onClick={onClick}>
    <img className={styles.logo} src="/img/UpArrow.png" alt="トップへ" />
  </button>
);

export default TopButton;
