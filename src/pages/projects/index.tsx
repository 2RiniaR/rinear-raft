import { GetStaticProps, InferGetStaticPropsType } from "next";
import ProjectIndexPage from "components/templates/projects-index/ProjectsIndexPage";
import { ProjectRepository } from "data/contents/projects";
import { getContentsId } from "data/contents/projects/fetch";

const Page = ({ contentsId }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const repository = new ProjectRepository(contentsId);
  return <ProjectIndexPage heads={repository.getAllContents("releasedAt")} />;
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: { contentsId: await getContentsId() } };
};

export default Page;
