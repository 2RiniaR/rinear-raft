import React, { ReactNode } from "react";
import Image from "next/image";
import { Footer, Meta } from "parts";
import { formatExceededTime } from "functions";
import { Letter } from "content";
import backgroundPic from "public/contents/background.webp";
import materialIconPic from "public/general/material-icon.png";
import defaultThumbnailPic from "public/general/thumbnail-default.webp";
import articleStyles from "styles/article.module.scss";

type Props = {
  content: Letter;
  children?: ReactNode;
};

const LetterTemplate = ({ content, children }: Props) => (
  <>
    <Meta
      pageTitle={content.title}
      pageDescription={content.description}
      pagePath={`/letters/${content.id}`}
      pageImgPath={content.image ? content.image.src : defaultThumbnailPic.src}
      pageType="article"
    />

    <Image className={articleStyles.back} src={backgroundPic} alt="背景" layout="responsive" />

    <header>
      <Image className={articleStyles.logo} src={materialIconPic} alt="プロジェクト" />
      <div className={articleStyles.display}>
        <h1 className={articleStyles.title}>{content.title}</h1>
        <p className={articleStyles.index}>#{content.index}</p>
        <p className={articleStyles.genre}>MATERIAL</p>
        <p className={articleStyles.updatedAt} suppressHydrationWarning={true}>
          最終更新：{formatExceededTime(new Date(), content.updatedAt)}
        </p>
      </div>
      <div className={articleStyles.layout}>
        <p className={articleStyles.description}>{content.description}</p>
        <Image src={content.image ?? defaultThumbnailPic} alt="サムネイル" className={articleStyles.thumbnail} />
      </div>
    </header>

    <main>{children}</main>

    <Footer />
  </>
);

export default LetterTemplate;
