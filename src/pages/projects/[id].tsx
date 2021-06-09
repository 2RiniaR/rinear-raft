import { GetStaticPaths, InferGetStaticPropsType } from "next";
import { ContentType } from "src/contents";
import { getStaticPathsInContent, getStaticPropsInContent } from "src/lib/contents";

export default function ProjectPage({ content }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <div>
      <h2>Project page</h2>
      <div dangerouslySetInnerHTML={{ __html: content.page }} />
    </div>
  );
}

const contentType: ContentType = "project";
export const getStaticProps = getStaticPropsInContent(contentType);
export const getStaticPaths: GetStaticPaths = getStaticPathsInContent(contentType);
