import styles from "./HoleEffect.module.scss";
import FullImage from "components/functions/image/FullImage";
import holeEffectPic from "public/img/hole_effect.png";

const HoleEffect = (): JSX.Element => <FullImage className={styles.image} src={holeEffectPic} alt="背景" />;

export default HoleEffect;
