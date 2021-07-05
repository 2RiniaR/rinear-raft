import bustersMission from "src/data/contents/projects/busters-mission";
import mazeEscape from "src/data/contents/projects/maze-escape";
import TalkPageTemplate from "src/components/templates/talk";
import viewingSiteWithCoffee from "src/data/contents/talks/viewing-site-with-coffee";

const Page = (): JSX.Element => (
  <TalkPageTemplate content={viewingSiteWithCoffee} suggestions={[bustersMission, mazeEscape]} />
);

export default Page;
