import { GetStaticProps, InferGetStaticPropsType } from "next";
import { ProjectContentHeadEncoded } from "src/lib/contents/projects/head";
import { getAllProjectContentHeads } from "src/data/contents/projects";

type ProjectsIndexPageParams = {
  heads: ProjectContentHeadEncoded[];
};

export default function ProjectsIndexPage({ heads }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  console.log(heads);
  return (
    <div>
      <h2>Projects index page</h2>
    </div>
  );
}

export const getStaticProps: GetStaticProps<ProjectsIndexPageParams> = async () => {
  const heads = await getAllProjectContentHeads();
  return { props: { heads: heads.map((head) => head.encode()) } };
};
