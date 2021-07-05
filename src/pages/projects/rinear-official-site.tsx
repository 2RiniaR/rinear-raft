import ProjectPageTemplate from "src/components/templates/project";
import bustersMission from "src/data/contents/projects/busters-mission";
import mageSimulator from "src/data/contents/projects/mage-simulator";
import rinearOfficialSite from "src/data/contents/projects/rinear-official-site";

const Page = (): JSX.Element => (
  <ProjectPageTemplate content={rinearOfficialSite} suggestions={[mageSimulator, bustersMission]} />
);

export default Page;
