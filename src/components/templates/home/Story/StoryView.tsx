import React, { Fragment } from "react";
import styles from "./StoryView.module.scss";
import { SceneView } from "./SceneView";
import { Story } from "types";

type Props = {
  story: Story;
};

export const StoryView = ({ story }: Props): JSX.Element => (
  <>
    <h1 className={styles.header}>STORY</h1>
    <div className={styles.container}>
      {story.scenes.map((scene, index) => (
        <Fragment key={scene.title}>
          <SceneView scene={scene} layout={index % 2 == 1 ? "left" : "right"} />
          {index + 1 != story.scenes.length ? <div className={styles.stair} key={`after-${scene.title}`} /> : ""}
        </Fragment>
      ))}
    </div>
  </>
);
