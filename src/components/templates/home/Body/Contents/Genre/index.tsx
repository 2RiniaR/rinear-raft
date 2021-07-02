import styles from "./index.module.scss";
import Viewer from "./Viewer";
import Background from "./Background";
import Title from "./Title";
import { ContentHead } from "src/lib/contents";
import { getComponentTemplate } from "src/lib/component";
import Parallax from "src/components/accessories/Parallax";

export type GenreParams = {
  title: string;
  backgroundImage: string;
  backgroundMaskColor: string;
  backgroundMaskOpacity: number;
  primaryTextColor: string;
  secondaryTextColor: string;
  heads: ContentHead[];
};

const Genre = getComponentTemplate(
  ({
    title,
    backgroundImage,
    backgroundMaskColor,
    backgroundMaskOpacity,
    primaryTextColor,
    secondaryTextColor,
    heads
  }: GenreParams) => (
    <div className={styles.container}>
      <Parallax className={styles.background} speed={0}>
        <Background
          className={styles.inner}
          src={backgroundImage}
          maskColor={backgroundMaskColor}
          maskOpacity={backgroundMaskOpacity}
        />
      </Parallax>
      <div className={styles.content}>
        <Title className={styles.header} text={title} color={primaryTextColor} />
        <Viewer
          className={styles.viewer}
          heads={heads}
          primaryTextColor={primaryTextColor}
          secondaryTextColor={secondaryTextColor}
        />
      </div>
    </div>
  )
);

export default Genre;
