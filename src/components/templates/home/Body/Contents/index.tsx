import styles from "./index.module.scss";
import Genre from "./Genre";
import { TalkContentHead, ProjectContentHead } from "src/lib/contents";

export type ContentsParams = {
  talks: TalkContentHead[];
  projects: ProjectContentHead[];
};

export default function Contents({ talks, projects }: ContentsParams): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={`${styles.genre} ${styles.talks}`}>
        <Genre heads={talks} title="Talks" />
      </div>
      <div className={`${styles.genre} ${styles.projects}`}>
        <Genre heads={projects} title="Projects" />
      </div>
    </div>
  );
}
