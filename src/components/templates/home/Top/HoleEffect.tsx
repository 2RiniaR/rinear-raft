import styles from "./HoleEffect.module.scss";
import holeEffectPic from "public/img/hole_effect.png";
import LazyStaticImage from "components/functions/lazy/LazyStaticImage";

const HoleEffect = (): JSX.Element => <LazyStaticImage className={styles.image} src={holeEffectPic} alt="背景" />;

export default HoleEffect;
