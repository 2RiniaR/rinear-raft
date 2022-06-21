/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import { assignClasses } from "../../../../lib/helper";
import styles from "./Landscape.module.scss";
import Background from "./Background";
import HoleEffect from "./HoleEffect";
import Shadow from "./Shadow";
import WindEffect from "./WindEffect";
import Logo from "./Logo";
import SmogEffect from "./SmogEffect";
import Rift from "./Rift";
import Phantom from "./Phantom";
import FixedParallax from "components/functions/parallax/Parallax";
import letterIcon from "public/img/letters.png";
import scenarioIcon from "public/img/scenarios.png";

type Props = {
  menuActive: boolean;
};

const Layer2 = ({ menuActive }: Props): JSX.Element => (
  <div className={styles.layer}>
    <Background />
    <HoleEffect />
    <WindEffect />
    <SmogEffect />
    <Rift active={menuActive} />
  </div>
);

const Layer1 = ({ menuActive }: Props): JSX.Element => (
  <div className={styles.layer}>
    <Logo active={menuActive} />
    <Shadow />
  </div>
);

const Layer0 = ({ menuActive }: Props): JSX.Element => (
  <div className={styles.layer}>
    <div className={assignClasses(styles.letters, !menuActive ? styles.hidden : "")}>
      <Phantom title="LETTERS" subtitle="制作状況" icon={letterIcon} href="/letters" />
    </div>
    <div className={assignClasses(styles.scenarios, !menuActive ? styles.hidden : "")}>
      <Phantom title="SCENARIOS" subtitle="企画／作品" icon={scenarioIcon} href="/scenarios" />
    </div>
  </div>
);

const Landscape = (props: Props): JSX.Element => (
  <header className={styles.view}>
    <div className={styles.elements}>
      <FixedParallax startInnerOrigin={0} endInnerOrigin={-0.1}>
        <Layer2 {...props} />
      </FixedParallax>
      <FixedParallax startInnerOrigin={0} endInnerOrigin={-0.2}>
        <Layer1 {...props} />
      </FixedParallax>
      <FixedParallax startInnerOrigin={0} endInnerOrigin={-0.3}>
        <Layer0 {...props} />
      </FixedParallax>
    </div>
  </header>
);

export default Landscape;
