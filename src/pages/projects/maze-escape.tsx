import ProjectPageTemplate from "src/components/templates/project";
import bustersMission from "src/data/contents/projects/busters-mission";
import mazeEscape from "src/data/contents/projects/maze-escape";
import mageSimulator from "src/data/contents/projects/mage-simulator";

const Page = (): JSX.Element => (
  <ProjectPageTemplate content={mazeEscape} suggestions={[mageSimulator, bustersMission]} />
);

export default Page;