import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import ProjectPageTemplate from "src/components/templates/project";
import {
  decodeProjectContent,
  encodeProjectContent,
  getAllProjectContentsName,
  getProjectContentFromName,
  ProjectContentEncoded
} from "src/contents/lib/projects/body";
import { ContentHeadEncoded, getHead } from "src/contents/lib/head";
import { getContentFromName } from "src/contents/lib/body";
import { decodeContentHead, encodeContentHead } from "src/contents/lib/serialize";

type ProjectPageParams = {
  content: ProjectContentEncoded;
  suggestions: ContentHeadEncoded[];
};

const ProjectPage = (params: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element =>
  ProjectPageTemplate({
    content: decodeProjectContent(params.content),
    suggestions: params.suggestions.map(decodeContentHead)
  });

export default ProjectPage;

export const getStaticProps: GetStaticProps<ProjectPageParams> = async ({ params }) => {
  if (!params || typeof params.name !== "string") throw new Error("params is invalid type.");
  const content = encodeProjectContent(await getProjectContentFromName(params.name));

  // 一時的
  const suggestions = [
    encodeContentHead(getHead(await getContentFromName("talks", "history"))),
    encodeContentHead(getHead(await getContentFromName("projects", "marvelous"))),
    encodeContentHead(getHead(await getContentFromName("projects", "mage-simulator")))
  ];
  console.log(JSON.stringify(new Date(2020, 3, 12, 4, 0, 0)));

  return { props: { content, suggestions } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const names: string[] = await getAllProjectContentsName();
  const paths = names.map((name) => ({
    params: { name }
  }));

  return {
    paths,
    fallback: false
  };
};
