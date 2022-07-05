import styles from "./Title.module.scss";
import { formatDisplayDate, formatExceededTime } from "utils/datetime";
import { Material, WithoutPage } from "models/content";

type Props = {
  head: WithoutPage<Material>;
};

export const Title = ({ head }: Props): JSX.Element => (
  <div className={styles.layout}>
    <h2 className={styles.title}>{head.title}</h2>
    <p className={styles.description}>{head.description}</p>
    <p className={styles.updatedAt} suppressHydrationWarning={true}>
      {"最終更新：" + formatExceededTime(new Date(), head.updatedAt)}
    </p>
    <p className={styles.releasedAt}>
      <span className={styles.text}>{formatDisplayDate(head.releasedAt)}</span>
    </p>
  </div>
);
