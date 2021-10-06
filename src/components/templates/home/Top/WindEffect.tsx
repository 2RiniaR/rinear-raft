import styles from "./WindEffect.module.scss";
import { assignClasses } from "lib/helper";
import windEffectPic from "public/img/wind_effect.png";
import StaticImage from "components/functions/image/StaticImage";

const WindEffect = (): JSX.Element => (
  <>
    <StaticImage className={assignClasses(styles.effect, styles.layer1)} src={windEffectPic} alt="風のエフェクト" />
    <StaticImage className={assignClasses(styles.effect, styles.layer2)} src={windEffectPic} alt="風のエフェクト" />
  </>
);

export default WindEffect;
