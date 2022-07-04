import React, { useRef } from "react";
import useScrollPast from "../../../fooks/scroll-past";
import styles from "./Menu.module.scss";
import Logo from "./Logo";
import Rift from "./Rift";
import Phantom from "./Phantom";
import ScrollIndicator from "./ScrollIndicator";
import { Pickup } from "lib/contents/pickup";
import materialIcon from "public/img/materials.png";
import { assignClasses } from "lib/helper";
import Parallax from "components/functions/Parallax";
import letterIcon from "public/img/letters.png";

type Props = {
  pickups: Pickup[];
};

const Menu = ({ pickups }: Props): JSX.Element => {
  const topEndRef = useRef<HTMLDivElement>(null);
  const hidden = useScrollPast(topEndRef);

  return (
    <>
      <div className={styles.view}>
        <div className={styles.elements}>
          <Parallax startInnerOrigin={0} endInnerOrigin={-0.1}>
            <Rift active={!hidden} pickups={pickups} />
          </Parallax>
          <Parallax startInnerOrigin={0} endInnerOrigin={-0.2}>
            <div className={assignClasses(styles.letters, hidden ? styles.hidden : "")}>
              <Phantom title="LETTERS" subtitle="制作状況" icon={letterIcon} href="/letters" />
            </div>
            <div className={assignClasses(styles.materials, hidden ? styles.hidden : "")}>
              <Phantom title="MATERIALS" subtitle="企画／作品" icon={materialIcon} href="/materials" />
            </div>
            <Logo active={!hidden} />
          </Parallax>
        </div>
        <ScrollIndicator enabled={!hidden} />
      </div>
      <div ref={topEndRef} style={{ position: "absolute", top: "120vh" }} />
    </>
  );
};

export default Menu;
