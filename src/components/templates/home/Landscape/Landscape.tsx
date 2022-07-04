import React from "react";
import styles from "./Landscape.module.scss";
import Background from "./Background";
import Shadow from "./Shadow";
import Darkness from "./Darkness";
import Parallax from "components/functions/Parallax";

type Props = {
  enableDarkness: boolean;
};

const Landscape = ({ enableDarkness }: Props): JSX.Element => (
  <>
    <div className={styles.view}>
      <div className={styles.elements}>
        <Parallax startInnerOrigin={0} endInnerOrigin={-0.1}>
          <Background />
        </Parallax>
        <Parallax startInnerOrigin={0} endInnerOrigin={-0.2}>
          <Shadow />
        </Parallax>
      </div>
    </div>
    <Darkness enabled={enableDarkness} />
  </>
);

export default Landscape;
