import styles from "./index.module.scss";
import Genre from "./Genre";
import { TalkContentHead, ProjectContentHead } from "src/lib/contents";
import { getComponentTemplate } from "src/lib/component";

export type ContentsParams = {
  talks: TalkContentHead[];
  projects: ProjectContentHead[];
};

const Contents = getComponentTemplate(({ talks, projects }: ContentsParams) => (
  <div className={styles.container}>
    <Genre className={styles.genre} heads={talks} title="TALKS" />
    <Genre className={styles.genre} heads={projects} title="PROJECTS" />
  </div>
));

export default Contents;
