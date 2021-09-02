import styles from "./TopButton.module.scss";
import StaticImage from "components/functions/image/StaticImage";
import upArrowPic from "public/img/UpArrow.png";

type Props = {
  onClick: () => void;
};

const TopButton = ({ onClick }: Props): JSX.Element => (
  <button className={styles.button} onClick={onClick} name="トップへ" aria-label="トップへ">
    <StaticImage className={styles.logo} src={upArrowPic} alt="トップへ" />
  </button>
);

export default TopButton;
