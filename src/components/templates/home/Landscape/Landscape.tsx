/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import styles from "./Landscape.module.scss";
import Background from "./Background";
import Shadow from "./Shadow";
import Parallax from "components/functions/Parallax";

const Landscape = (): JSX.Element => (
  <header className={styles.view}>
    <div className={styles.elements}>
      <Parallax startInnerOrigin={0} endInnerOrigin={-0.1}>
        <Background />
      </Parallax>
      <Parallax startInnerOrigin={0} endInnerOrigin={-0.2}>
        <Shadow />
      </Parallax>
    </div>
  </header>
);

export default Landscape;
