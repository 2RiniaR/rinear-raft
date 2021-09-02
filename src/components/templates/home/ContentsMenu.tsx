import React from "react";
import Link from "next/link";
import StaticImage from "../../functions/image/StaticImage";
import styles from "./ContentsMenu.module.scss";
import CompositeText from "components/functions/text/CompositeText";
import talksPic from "public/img/talks.png";
import projectsPic from "public/img/projects.png";
import menuBorderPic from "public/img/menu_border.svg";

type ElementProps = {
  href: string;
  name: string;
  iconSrc: StaticImageData;
  description: string;
};

const Element = ({ href, name, iconSrc, description }: ElementProps): JSX.Element => (
  <Link href={href}>
    <a className={styles.linker}>
      <StaticImage className={styles.icon} src={iconSrc} alt="アイコン" />
      <div className={styles.caption}>
        <div className={styles.inner}>
          <h2 className={styles.name}>
            <CompositeText>
              <div className={styles.text}>{name}</div>
            </CompositeText>
          </h2>
          <h2 className={styles.description}>
            <CompositeText>
              <div className={styles.text}>{description}</div>
            </CompositeText>
          </h2>
        </div>
        <StaticImage className={styles.background} src={menuBorderPic} alt="メニュー背景" />
      </div>
    </a>
  </Link>
);

const ContentsMenu = (): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.element}>
        <Element href={"/talks"} name="TALKS" iconSrc={talksPic} description="制作風景" />
      </div>
      <div className={styles.element}>
        <Element href={"/projects"} name="PROJECTS" iconSrc={projectsPic} description="作品一覧" />
      </div>
    </div>
  </div>
);

export default ContentsMenu;
