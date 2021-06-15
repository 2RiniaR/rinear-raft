import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import ProjectPageTemplate from "src/components/templates/project";
import { ProjectContent, ProjectContentEncoded } from "src/contents/lib/projects/body";
import { ContentHeadEncoded } from "src/contents/lib/head";
import { ContentGenre } from "src/contents/lib/genre";
import { Content } from "src/contents/lib/body";

type ProjectPageParams = {
  content: ProjectContentEncoded;
  suggestions: ContentHeadEncoded[];
};

const ProjectPage = (params: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element =>
  ProjectPageTemplate({
    content: params.content.decode(),
    suggestions: params.suggestions.map((head) => head.decode())
  });

export default ProjectPage;
const genre: ContentGenre = "projects";

export const getStaticProps: GetStaticProps<ProjectPageParams> = async ({ params }) => {
  if (!params || typeof params.name !== "string") throw new Error("params is invalid type.");
  const content = await ProjectContent.getFromName(params.name);
  // 一時的
  const suggestions = [
    (await Content.getFromName("projects", "history")).getHead().encode(),
    (await Content.getFromName("projects", "marvelous")).getHead().encode(),
    (await Content.getFromName("projects", "mage-simulator")).getHead().encode()
  ];
  return { props: { content: content.encode(), suggestions } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const names: string[] = await Content.getAllNames(genre);
  const paths = names.map((name) => ({
    params: { name }
  }));

  return {
    paths,
    fallback: false
  };
};
