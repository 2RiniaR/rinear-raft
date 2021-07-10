import bustersMission from "src/data/contents/projects/busters-mission";
import mazeEscape from "src/data/contents/projects/maze-escape";
import TalkPageTemplate from "src/components/templates/talk";
import lookBackBackups2 from "src/data/contents/talks/look-back-backups-2";

const Page = (): JSX.Element => (
  <TalkPageTemplate content={lookBackBackups2} suggestions={[bustersMission, mazeEscape]} />
);

export default Page;
