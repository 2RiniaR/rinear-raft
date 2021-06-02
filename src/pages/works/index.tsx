import { InferGetStaticPropsType } from "next";
import { ContentType } from "src/contents";
import { getStaticPropsInContentHead } from "src/lib/contents";

export default function WorksIndexPage({ contents }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  console.log(contents);
  return (
    <div>
      <h2>Works index page</h2>
    </div>
  );
}

const contentType: ContentType = "work";
export const getStaticProps = getStaticPropsInContentHead(contentType);
