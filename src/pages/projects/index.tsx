import { GetStaticProps, InferGetStaticPropsType } from "next";
import { ProjectContentHead, ProjectContentHeadEncoded } from "src/contents/lib/projects/head";

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
  const heads = await ProjectContentHead.getAll();
  return { props: { heads: heads.map((head) => head.encode()) } };
};
