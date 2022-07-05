import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "./Message.module.scss";
import { assignClasses } from "utils/dom";
import { PreloadStaticImage } from "components/functions/loading";
import backgroundPic from "public/home/message-background.webp";
import { About } from "types";

type Props = {
  about: About;
};

export const Message = ({ about }: Props): JSX.Element => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className={styles.container}>
      <PreloadStaticImage src={backgroundPic} className={styles.background} layout="responsive" alt="背景" />
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span ref={ref} className={assignClasses(styles.text, inView ? styles.active : styles.inactive)}>
            <span className={styles.first}>
              この<span className={styles.strong}>筏</span>は私を、
            </span>
            <span className={styles.last}>どこへ連れてゆくんだろう。</span>
          </span>
        </h1>
        <section className={styles.body}>
          <about.Document />
        </section>
      </div>
    </div>
  );
};
