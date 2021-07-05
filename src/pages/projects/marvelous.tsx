import ProjectPageTemplate from "src/components/templates/project";
import marvelous from "src/data/contents/projects/marvelous";
import bustersMission from "src/data/contents/projects/busters-mission";
import mazeEscape from "src/data/contents/projects/maze-escape";

const Page = (): JSX.Element => (
  <ProjectPageTemplate content={marvelous} suggestions={[bustersMission, mazeEscape]} />
);

export default Page;
