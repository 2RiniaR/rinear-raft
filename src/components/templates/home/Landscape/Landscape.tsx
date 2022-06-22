/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import styles from "./Landscape.module.scss";
import Background from "./Background";
import Shadow from "./Shadow";
import Logo from "./Logo";
import Rift from "./Rift";
import Phantom from "./Phantom";
import { assignClasses } from "lib/helper";
import FixedParallax from "components/functions/parallax/Parallax";
import letterIcon from "public/img/letters.png";
import scenarioIcon from "public/img/scenarios.png";

type Props = {
  menuActive: boolean;
};

const Landscape = ({ menuActive }: Props): JSX.Element => (
  <header className={styles.view}>
    <div className={styles.elements}>
      <FixedParallax startInnerOrigin={0} endInnerOrigin={-0.1}>
        <Background />
      </FixedParallax>
      <FixedParallax startInnerOrigin={0} endInnerOrigin={-0.2}>
        <Shadow />
        <Logo active={menuActive} />
      </FixedParallax>
      <FixedParallax startInnerOrigin={0} endInnerOrigin={-0.1}>
        <Rift active={menuActive} />
      </FixedParallax>
      <FixedParallax startInnerOrigin={0} endInnerOrigin={-0.3}>
        <div className={assignClasses(styles.letters, !menuActive ? styles.hidden : "")}>
          <Phantom title="LETTERS" subtitle="制作状況" icon={letterIcon} href="/letters" />
        </div>
        <div className={assignClasses(styles.scenarios, !menuActive ? styles.hidden : "")}>
          <Phantom title="SCENARIOS" subtitle="企画／作品" icon={scenarioIcon} href="/scenarios" />
        </div>
      </FixedParallax>
    </div>
  </header>
);

export default Landscape;
