import styles from "./TopButton.module.scss";
import { StaticImage } from "components/functions";
import upIconPic from "public/general/up-icon.png";

type Props = {
  onClick: () => void;
};

export const TopButton = ({ onClick }: Props): JSX.Element => (
  <div className={styles.screen}>
    <button className={styles.button} onClick={onClick} name="トップへ" aria-label="トップへ">
      <StaticImage className={styles.logo} src={upIconPic} alt="トップへ" layout="responsive" />
    </button>
  </div>
);
