import styles from "./SceneView.module.scss";
import { StaticImage } from "components/functions";
import { assignClasses } from "lib/helper";
import { Scene } from "lib";

type Props = {
  scene: Scene;
  layout: "left" | "right";
};

export const SceneView = ({ scene, layout }: Props): JSX.Element => (
  <div className={assignClasses(styles.container, layout == "left" ? styles.left : styles.right)}>
    <div className={styles.background} />
    <div className={styles.content}>
      <h1 className={styles.title}>{scene.title}</h1>
      <StaticImage className={styles.thumbnail} src={scene.thumbnail} layout={"responsive"} alt={scene.title} />
      <div className={styles.document}>
        <scene.Document />
      </div>
    </div>
  </div>
);
