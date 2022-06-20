/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import styles from "./TopButton.module.scss";
import StaticImage from "components/functions/image/StaticImage";
import upArrowPic from "public/img/UpArrow.png";

type Props = {
  onClick: () => void;
};

const TopButton = ({ onClick }: Props): JSX.Element => (
  <div className={styles.screen}>
    <button className={styles.button} onClick={onClick} name="トップへ" aria-label="トップへ">
      <StaticImage className={styles.logo} src={upArrowPic} alt="トップへ" />
    </button>
  </div>
);

export default TopButton;
