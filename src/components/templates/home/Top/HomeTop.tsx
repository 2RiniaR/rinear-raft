import styles from "./HomeTop.module.scss";
import Background from "./Landscape";
import HoleEffect from "./HoleEffect";
import Shadow from "./Shadow";
import WindEffect from "./WindEffect";
import TopLogo from "./TopLogo";
import FixedParallax from "components/functions/parallax/Parallax";

const Layer2 = (): JSX.Element => (
  <div className={styles.layer}>
    <Background />
    <HoleEffect />
  </div>
);

const Layer1 = (): JSX.Element => (
  <div className={styles.layer}>
    <Shadow />
  </div>
);

const Layer0 = (): JSX.Element => (
  <div className={styles.layer}>
    <WindEffect />
    <TopLogo />
  </div>
);

const HomeTop = (): JSX.Element => (
  <header className={styles.view}>
    <div className={styles.elements}>
      <FixedParallax startInnerOrigin={0} endInnerOrigin={-0.7}>
        <Layer2 />
      </FixedParallax>
      <FixedParallax startInnerOrigin={0} endInnerOrigin={-0.9}>
        <Layer1 />
      </FixedParallax>
      <Layer0 />
    </div>
  </header>
);

export default HomeTop;
