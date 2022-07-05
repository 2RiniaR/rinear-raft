import styles from "./Title.module.scss";
import { formatDisplayDate, formatExceededTime } from "utils/datetime";
import { Material, WithoutPage } from "models/content";

type Props = {
  material: WithoutPage<Material>;
};

export const Title = ({ material }: Props): JSX.Element => (
  <div className={styles.layout}>
    <h2 className={styles.title}>{material.title}</h2>
    <p className={styles.description}>{material.description}</p>
    <p className={styles.updatedAt} suppressHydrationWarning={true}>
      {"最終更新：" + formatExceededTime(new Date(), material.updatedAt)}
    </p>
    <p className={styles.releasedAt}>
      <span className={styles.text}>{formatDisplayDate(material.releasedAt)}</span>
    </p>
  </div>
);
