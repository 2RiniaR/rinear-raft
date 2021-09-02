import ProjectIndexPage from "components/templates/projects-index/ProjectsIndexPage";
import { contentsRepository } from "data/contents";

const Page = (): JSX.Element => <ProjectIndexPage heads={contentsRepository.getProjectContents("updatedAt")} />;

export default Page;
