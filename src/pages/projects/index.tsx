import ProjectIndex from "src/components/templates/projects-index";
import { contentsRepository } from "src/data/contents";

const Page = (): JSX.Element => <ProjectIndex heads={contentsRepository.getProjectContents("updatedAt")} />;

export default Page;
