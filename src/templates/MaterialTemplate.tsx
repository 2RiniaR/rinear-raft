import React, { ReactNode } from "react";
import Image from "next/image";
import { Footer, Meta } from "parts";
import { formatDisplayDate, formatExceededTime } from "functions";
import { Material } from "content";
import backgroundPic from "public/contents/background.webp";
import materialIconPic from "public/general/material-icon.png";
import defaultThumbnailPic from "public/general/thumbnail-default.webp";
import articleStyles from "styles/article.module.scss";

type Props = {
  content: Material;
  children?: ReactNode;
};

const MaterialTemplate = ({ content, children }: Props) => (
  <>
    <Meta
      pageTitle={content.title}
      pageDescription={content.description}
      pagePath={`/materials/${content.id}`}
      pageImgPath={content.image1 ? content.image1.src : defaultThumbnailPic.src}
      pageType="article"
    />

    <Image className={articleStyles.back} src={backgroundPic} alt="背景" layout="responsive" />

    <header>
      <Image className={articleStyles.logo} src={materialIconPic} alt="プロジェクト" />
      <div className={articleStyles.display}>
        <h1 className={articleStyles.title}>{content.title}</h1>
        <p className={articleStyles.releasedAt}>{content.releasedAt ? formatDisplayDate(content.releasedAt) : "---"}</p>
        <p className={articleStyles.genre}>MATERIAL</p>
        <p className={articleStyles.updatedAt} suppressHydrationWarning={true}>
          最終更新：{formatExceededTime(new Date(), content.updatedAt)}
        </p>
      </div>
      <div className={articleStyles.layout}>
        <p className={articleStyles.description}>{content.description}</p>
        <div className={articleStyles.thumbnails}>
          <Image src={content.image2 ?? defaultThumbnailPic} alt="サブサムネイル" className={articleStyles.thumbnail} />
          <Image src={content.image3 ?? defaultThumbnailPic} alt="サブサムネイル" className={articleStyles.thumbnail} />
          <Image src={content.image4 ?? defaultThumbnailPic} alt="サブサムネイル" className={articleStyles.thumbnail} />
        </div>
      </div>
    </header>

    <main>{children}</main>

    <Footer />
  </>
);

export default MaterialTemplate;
