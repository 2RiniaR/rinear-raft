import { GetStaticPaths, InferGetStaticPropsType } from "next";
import { ContentType } from "src/contents";
import { getStaticPathsInContent, getStaticPropsInContent, toContent } from "src/lib/contents";
import ProjectPage from "src/components/templates/project";

export default ({ content }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element =>
  ProjectPage(toContent(content));

const contentType: ContentType = "project";
export const getStaticProps = getStaticPropsInContent(contentType);
export const getStaticPaths: GetStaticPaths = getStaticPathsInContent(contentType);
