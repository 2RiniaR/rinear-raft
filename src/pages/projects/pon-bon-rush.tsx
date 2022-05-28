import { InferGetStaticPropsType } from "next";
import ProjectPage from "components/templates/project/ProjectPage";
import { ProjectRepository } from "data/contents/projects";

const Page = (): JSX.Element => {
  const repository = new ProjectRepository(["popcorn-chef"]);
  return <ProjectPage content={repository.getContent("popcorn-chef")} />;
};

export default Page;
