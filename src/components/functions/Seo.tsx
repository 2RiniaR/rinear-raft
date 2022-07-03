import Head from "next/head";

type Props = {
  pageTitle?: string;
  pageType?: "website" | "article";
  pageDescription?: string;
  pagePath?: string;
  pageImgPath?: string;
};

const Seo = ({ pageTitle, pageType, pageDescription, pagePath, pageImgPath }: Props) => {
  const defaultTitle = "RineaRの筏";
  const defaultDescription = "";
  const defaultUrl = "https://rinear.net";

  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
  const description = pageDescription ? pageDescription : defaultDescription;
  const url = defaultUrl + pagePath;
  const type = pageType ?? "website";
  const imgUrl = defaultUrl + pageImgPath;
  const imgWidth = 1280;
  const imgHeight = 640;
  const twitterId = "14RineaR";

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={String(imgWidth)} />
      <meta property="og:image:height" content={String(imgHeight)} />
      <meta name="twitter:site" content={`@${twitterId}`} />
    </Head>
  );
};

export default Seo;
