/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React, { ReactNode, useContext } from "react";
import styles from "./Heading.module.scss";
import { assignClasses } from "lib/helper";
import { ContentContext } from "lib/contents";
import StaticImage from "components/functions/image/StaticImage";
import TalkPic from "public/img/talks.png";
import ScenarioPic from "public/img/scenarios.png";

type Props = {
  children?: ReactNode;
  level: "top" | "sub" | "detail";
};

const TopHeading = ({ children }: { children?: ReactNode }) => {
  const content = useContext(ContentContext);
  return (
    <h1 className={assignClasses(styles.heading, styles.top)}>
      <StaticImage src={content.genre === "talks" ? TalkPic : ScenarioPic} alt="アイコン" className={styles.icon} />
      {children}
    </h1>
  );
};

const SubHeading = ({ children }: { children?: ReactNode }) => (
  <h2 className={assignClasses(styles.heading, styles.sub)}>{children}</h2>
);

const DetailHeading = ({ children }: { children?: ReactNode }) => (
  <h3 className={assignClasses(styles.heading, styles.detail)}>{children}</h3>
);

const Heading = ({ children, level }: Props): JSX.Element => {
  if (level === "top") return <TopHeading>{children}</TopHeading>;
  if (level === "sub") return <SubHeading>{children}</SubHeading>;
  return <DetailHeading>{children}</DetailHeading>;
};

export default Heading;
