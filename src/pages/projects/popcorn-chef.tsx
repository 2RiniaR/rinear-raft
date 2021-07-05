import ProjectPageTemplate from "src/components/templates/project";
import bustersMission from "src/data/contents/projects/busters-mission";
import mageSimulator from "src/data/contents/projects/mage-simulator";
import popcornChef from "src/data/contents/projects/popcorn-chef";

const Page = (): JSX.Element => (
  <ProjectPageTemplate content={popcornChef} suggestions={[mageSimulator, bustersMission]} />
);

export default Page;
