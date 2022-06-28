/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import styles from "./FullMenu.module.scss";
import Logo from "./Logo";
import Rift from "./Rift";
import Phantom from "./Phantom";
import { assignClasses } from "lib/helper";
import Parallax from "components/functions/parallax/Parallax";
import letterIcon from "public/img/letters.png";
import scenarioIcon from "public/img/scenarios.png";

type Props = {
  active: boolean;
};

const FullMenu = ({ active }: Props): JSX.Element => (
  <header className={styles.view}>
    <div className={styles.elements}>
      <Parallax startInnerOrigin={0} endInnerOrigin={-0.1}>
        <Rift active={active} />
      </Parallax>
      <Parallax startInnerOrigin={0} endInnerOrigin={-0.2}>
        <div className={assignClasses(styles.letters, !active ? styles.hidden : "")}>
          <Phantom title="LETTERS" subtitle="制作状況" icon={letterIcon} href="/letters" />
        </div>
        <div className={assignClasses(styles.scenarios, !active ? styles.hidden : "")}>
          <Phantom title="SCENARIOS" subtitle="企画／作品" icon={scenarioIcon} href="/scenarios" />
        </div>
        <Logo active={active} />
      </Parallax>
    </div>
  </header>
);

export default FullMenu;
