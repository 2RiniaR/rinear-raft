import { GetStaticPaths, InferGetStaticPropsType } from "next";
import { ContentType } from "src/contents";
import { getStaticPathsInContent, getStaticPropsInContent } from "src/lib/contents";

export default function WorkPage({ content }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <div>
      <h2>Work page</h2>
      <div dangerouslySetInnerHTML={{ __html: content.page }} />
    </div>
  );
}

const contentType: ContentType = "work";
export const getStaticProps = getStaticPropsInContent(contentType);
export const getStaticPaths: GetStaticPaths = getStaticPathsInContent(contentType);
