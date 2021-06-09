import { InferGetStaticPropsType } from "next";
import { ContentType } from "src/contents";
import { getStaticPropsInContentHead } from "src/lib/contents";

export default function TalksIndexPage({ contents }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  console.log(contents);
  return (
    <div>
      <h2>Talks index page</h2>
    </div>
  );
}

const contentType: ContentType = "talk";
export const getStaticProps = getStaticPropsInContentHead(contentType);
