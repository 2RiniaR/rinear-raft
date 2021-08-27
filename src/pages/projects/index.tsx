import ProjectIndexPage from "src/components/templates/projects-index/ProjectsIndexPage";
import { contentsRepository } from "src/data/contents";

const Page = (): JSX.Element => <ProjectIndexPage heads={contentsRepository.getProjectContents("updatedAt")} />;

export default Page;
