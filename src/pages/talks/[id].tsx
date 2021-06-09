import { GetStaticPaths, InferGetStaticPropsType } from "next";
import { ContentType } from "src/contents";
import { getStaticPathsInContent, getStaticPropsInContent, toContent } from "src/lib/contents";
import TalkPage from "src/components/templates/talk";

export default ({ content }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element =>
  TalkPage(toContent(content));

const contentType: ContentType = "talk";
export const getStaticProps = getStaticPropsInContent(contentType);
export const getStaticPaths: GetStaticPaths = getStaticPathsInContent(contentType);
