import bustersMission from "src/data/contents/projects/busters-mission";
import mazeEscape from "src/data/contents/projects/maze-escape";
import individualSoftwareDesign from "src/data/contents/talks/individual-software-design";
import TalkPageTemplate from "src/components/templates/talk";

const Page = (): JSX.Element => (
  <TalkPageTemplate content={individualSoftwareDesign} suggestions={[bustersMission, mazeEscape]} />
);

export default Page;
