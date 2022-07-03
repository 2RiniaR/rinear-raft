/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import styles from "./Menu.module.scss";
import Logo from "./Logo";
import Rift from "./Rift";
import Phantom from "./Phantom";
import materialIcon from "public/img/materials.png";
import { assignClasses } from "lib/helper";
import Parallax from "components/functions/Parallax";
import letterIcon from "public/img/letters.png";

type Props = {
  active: boolean;
};

const Menu = ({ active }: Props): JSX.Element => (
  <header className={styles.view}>
    <div className={styles.elements}>
      <Parallax startInnerOrigin={0} endInnerOrigin={-0.1}>
        <Rift active={active} />
      </Parallax>
      <Parallax startInnerOrigin={0} endInnerOrigin={-0.2}>
        <div className={assignClasses(styles.letters, !active ? styles.hidden : "")}>
          <Phantom title="LETTERS" subtitle="制作状況" icon={letterIcon} href="/letters" />
        </div>
        <div className={assignClasses(styles.materials, !active ? styles.hidden : "")}>
          <Phantom title="MATERIALS" subtitle="企画／作品" icon={materialIcon} href="/materials" />
        </div>
        <Logo active={active} />
      </Parallax>
    </div>
  </header>
);

export default Menu;
