import React from "react";
import Image from "next/image";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { LetterContent } from "../libs/microcms/types";
import {
  convertToNextImageProps,
  formatDisplayDateFromString,
  formatExceededTimeFromString
} from "../libs/microcms/helpers";
import { mc } from "../functions";
import { preprocessCmsBody } from "../functions/cms";
import styles from "./LetterTemplate.module.scss";
import articleStyles from "styles/article.module.scss";
import letterStyles from "styles/letter.module.scss";
import { Footer, Meta, SideMenu } from "parts";
import defaultThumbnailPic from "public/general/thumbnail-default.webp";
import letterIconPic from "public/general/letter-icon.png";
import backgroundPic from "public/general/letters-background.png";

type Props = LetterContent & MicroCMSContentId & MicroCMSDate;

const LetterTemplate = ({ id, title, description, body, thumbnail, revisedAt, publishedAt }: Props) => (
  <div className={styles.page}>
    <Meta
      pageTitle={title}
      pageDescription={description}
      pagePath={`/letters/${id}`}
      pageImgPath={thumbnail ? thumbnail.url : defaultThumbnailPic.src}
      pageType="article"
    />

    <Image src={backgroundPic} className={styles.background} alt="背景" />
    <SideMenu />

    <header className={styles.header}>
      <div className={styles.intro}>
        <Image className={styles.genreIcon} src={letterIconPic} alt={"LETTER"} width={100} />
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.releasedAt}>{formatDisplayDateFromString(publishedAt)}</div>
      <Image className={styles.image} {...convertToNextImageProps(thumbnail, 600, defaultThumbnailPic)} alt={title} />
      <div className={styles.description}>{description}</div>
      <div className={styles.updatedAt} suppressHydrationWarning={true}>
        {formatExceededTimeFromString(revisedAt)}
      </div>
    </header>

    <div className={styles.article}>
      <main
        className={mc(articleStyles.article, letterStyles.letter)}
        dangerouslySetInnerHTML={{ __html: `${preprocessCmsBody(body)}` }}
      ></main>
    </div>

    <Footer />
  </div>
);

export default LetterTemplate;
