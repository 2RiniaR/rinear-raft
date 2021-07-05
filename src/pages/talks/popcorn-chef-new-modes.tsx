import bustersMission from "src/data/contents/projects/busters-mission";
import mazeEscape from "src/data/contents/projects/maze-escape";
import TalkPageTemplate from "src/components/templates/talk";
import popcornChefNewModes from "src/data/contents/talks/popcorn-chef-new-modes";

const Page = (): JSX.Element => (
  <TalkPageTemplate content={popcornChefNewModes} suggestions={[bustersMission, mazeEscape]} />
);

export default Page;
