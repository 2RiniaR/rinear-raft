import styles from "./HoleEffect.module.scss";
import StaticImage from "components/functions/image/StaticImage";
import holeEffectPic from "public/img/hole_effect.png";

const HoleEffect = (): JSX.Element => <StaticImage className={styles.image} src={holeEffectPic} alt="背景" />;

export default HoleEffect;
