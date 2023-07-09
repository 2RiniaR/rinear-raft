import React from "react";
import Image from "next/image";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { MaterialContent } from "../libs/microcms/types";
import {
  convertToNextImageProps,
  formatDisplayDateFromString,
  formatExceededTimeFromString
} from "../libs/microcms/helpers";
import { mc } from "../functions";
import { preprocessCmsBody } from "../functions/cms";
import styles from "./MaterialTemplate.module.scss";
import articleStyles from "styles/article.module.scss";
import materialStyles from "styles/material.module.scss";
import { Footer, Meta, SideMenu } from "parts";
import defaultThumbnailPic from "public/general/thumbnail-default.webp";
import materialIconPic from "public/general/material-icon.png";
import backgroundPic from "public/general/materials-background.jpg";

type Props = MaterialContent & MicroCMSContentId & MicroCMSDate;

const MaterialTemplate = ({ id, title, description, releasedAt, body, thumbnail, revisedAt }: Props) => (
  <div className={styles.page}>
    <Meta
      pageTitle={title}
      pageDescription={description}
      pagePath={`/materials/${id}`}
      pageImgPath={thumbnail ? thumbnail.url : defaultThumbnailPic.src}
      pageType="article"
    />

    <Image src={backgroundPic} className={styles.background} alt="背景" />
    <SideMenu />

    <header className={styles.header}>
      <div className={styles.intro}>
        <Image className={styles.genreIcon} src={materialIconPic} alt={"MATERIAL"} width={100} />
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.releasedAt}>{formatDisplayDateFromString(releasedAt)}</div>
      <Image className={styles.image} {...convertToNextImageProps(thumbnail, 600, defaultThumbnailPic)} alt={title} />
      <div className={styles.description}>{description}</div>
      <div className={styles.updatedAt} suppressHydrationWarning={true}>
        {formatExceededTimeFromString(revisedAt)}
      </div>
    </header>

    <div className={styles.article}>
      <main
        className={mc(articleStyles.article, materialStyles.material)}
        dangerouslySetInnerHTML={{ __html: `${preprocessCmsBody(body)}` }}
      ></main>
    </div>

    <Footer />
  </div>
);

export default MaterialTemplate;
