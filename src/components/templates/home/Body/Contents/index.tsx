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
    <Genre
      className={styles.genre}
      heads={projects}
      title="PROJECTS"
      backgroundImage="/top.jpg"
      backgroundMaskColor="#babadf"
      backgroundMaskOpacity={0.8}
      primaryTextColor="#000014"
      secondaryTextColor="#808080"
    />
    <Genre
      className={styles.genre}
      heads={talks}
      title="TALKS"
      backgroundImage="/top.jpg"
      backgroundMaskColor="#000014"
      backgroundMaskOpacity={0.8}
      primaryTextColor="#babadf"
      secondaryTextColor="#808080"
    />
  </div>
));

export default Contents;
