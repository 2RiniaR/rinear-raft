/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import styles from "./Landscape.module.scss";
import Background from "./Background";
import Shadow from "./Shadow";
import FixedParallax from "components/functions/parallax/Parallax";

const Landscape = (): JSX.Element => (
  <header className={styles.view}>
    <div className={styles.elements}>
      <FixedParallax startInnerOrigin={0} endInnerOrigin={-0.1}>
        <Background />
      </FixedParallax>
      <FixedParallax startInnerOrigin={0} endInnerOrigin={-0.2}>
        <Shadow />
      </FixedParallax>
    </div>
  </header>
);

export default Landscape;
