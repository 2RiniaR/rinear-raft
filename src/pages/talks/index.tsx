import { InferGetStaticPropsType } from "next";
import { ContentType } from "src/contents";
import { getStaticPropsInContentHead } from "src/lib/contents";

export default function PostsIndexPage({ contents }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  console.log(contents);
  return (
    <div>
      <h2>Posts index page</h2>
    </div>
  );
}

const contentType: ContentType = "post";
export const getStaticProps = getStaticPropsInContentHead(contentType);
