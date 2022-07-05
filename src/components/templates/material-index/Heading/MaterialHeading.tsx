import styles from "./MaterialHeading.module.scss";
import { Title } from "./Title";
import { SubThumbnails } from "./SubThumbnails";
import { Material, WithoutPage } from "models/content";
import { StaticImage } from "components/functions";
import defaultThumbnailPic from "public/general/thumbnail-default.webp";

type Props = {
  material: WithoutPage<Material>;
};

export const MaterialHeading = ({ material }: Props): JSX.Element => (
  <article className={styles.container}>
    <StaticImage
      src={material.thumbnails[0] ?? defaultThumbnailPic}
      alt={material.title}
      className={styles.mainThumbnail}
      layout="responsive"
    />
    <div className={styles.subThumbnails}>
      <SubThumbnails material={material} />
    </div>
    <div className={styles.title}>
      <Title material={material} />
    </div>
  </article>
);
