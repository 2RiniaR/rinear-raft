import { GetStaticPaths, InferGetStaticPropsType } from "next";
import { ContentType } from "src/contents";
import { getStaticPathsInContent, getStaticPropsInContent } from "src/lib/contents";

export default function TalkPage({ content }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <div>
      <h2>Post page</h2>
      <div dangerouslySetInnerHTML={{ __html: content.page }} />
    </div>
  );
}

const contentType: ContentType = "talk";
export const getStaticProps = getStaticPropsInContent(contentType);
export const getStaticPaths: GetStaticPaths = getStaticPathsInContent(contentType);
