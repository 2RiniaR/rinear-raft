import React, { useRef } from "react";
import styles from "./Menu.module.scss";
import { Logo } from "./Logo";
import { Rift } from "./Rift";
import { Phantom } from "./Phantom";
import { ScrollIndicator } from "./ScrollIndicator";
import { assignClasses } from "utils/dom";
import { useScrollPast } from "fooks";
import { Pickup } from "models/home";
import { Parallax } from "components/functions";
import materialIconPic from "public/general/material-icon.png";
import letterIconPic from "public/general/letter-icon.png";

type Props = {
  pickups: Pickup[];
};

export const Menu = ({ pickups }: Props): JSX.Element => {
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
              <Phantom title="LETTERS" subtitle="制作状況" icon={letterIconPic} href="/letters" />
            </div>
            <div className={assignClasses(styles.materials, hidden ? styles.hidden : "")}>
              <Phantom title="MATERIALS" subtitle="企画／作品" icon={materialIconPic} href="/materials" />
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
