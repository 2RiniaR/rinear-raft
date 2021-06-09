import { InferGetStaticPropsType } from "next";
import { ContentType } from "src/contents";
import { getStaticPropsInContentHead } from "src/lib/contents";

export default function ProjectsIndexPage({ contents }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  console.log(contents);
  return (
    <div>
      <h2>Projects index page</h2>
    </div>
  );
}

const contentType: ContentType = "project";
export const getStaticProps = getStaticPropsInContentHead(contentType);
