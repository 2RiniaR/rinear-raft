import { GetStaticPaths, InferGetStaticPropsType } from "next";
import { ContentType } from "src/contents";
import { getStaticPathsInContent, getStaticPropsInContent } from "src/lib/contents";

export default function PostPage({ content }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <div>
      <h2>Post page</h2>
      <div dangerouslySetInnerHTML={{ __html: content.page }} />
    </div>
  );
}

const contentType: ContentType = "post";
export const getStaticProps = getStaticPropsInContent(contentType);
export const getStaticPaths: GetStaticPaths = getStaticPathsInContent(contentType);
