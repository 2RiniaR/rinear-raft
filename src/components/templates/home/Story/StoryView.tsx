import styles from "./StoryView.module.scss";
import SceneView from "./SceneView";
import { Story } from "lib/story";

type Props = {
  story: Story;
};

export const StoryView = ({ story }: Props): JSX.Element => (
  <div className={styles.container}>
    {story.scenes.map((scene, index) => (
      <>
        <SceneView scene={scene} layout={index % 2 == 1 ? "left" : "right"} key={scene.title} />
        {index + 1 != story.scenes.length ? <div className={styles.stair} key={`after-${scene.title}`} /> : ""}
      </>
    ))}
  </div>
);

export default StoryView;
