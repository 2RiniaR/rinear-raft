import styles from "./Landscape.module.scss";
import Background from "./Background";
import HoleEffect from "./HoleEffect";
import Shadow from "./Shadow";
import WindEffect from "./WindEffect";
import Logo from "./Logo";
import SmogEffect from "./SmogEffect";
import FixedParallax from "components/functions/parallax/Parallax";

const Layer2 = (): JSX.Element => (
  <div className={styles.layer}>
    <Background />
    <HoleEffect />
    <WindEffect />
    <SmogEffect />
  </div>
);

const Layer1 = (): JSX.Element => (
  <div className={styles.layer}>
    <Shadow />
  </div>
);

const Layer0 = (): JSX.Element => (
  <div className={styles.layer}>
    <Logo />
  </div>
);

const Landscape = (): JSX.Element => (
  <header className={styles.view}>
    <div className={styles.elements}>
      <FixedParallax startInnerOrigin={0} endInnerOrigin={-0.1}>
        <Layer2 />
      </FixedParallax>
      <FixedParallax startInnerOrigin={0} endInnerOrigin={-0.2}>
        <Layer1 />
      </FixedParallax>
      <FixedParallax startInnerOrigin={0} endInnerOrigin={-0.3}>
        <Layer0 />
      </FixedParallax>
    </div>
  </header>
);

export default Landscape;
