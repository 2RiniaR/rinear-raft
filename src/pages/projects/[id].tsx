import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import ProjectPage from "components/templates/project/ProjectPage";
import { contentsRepository } from "data/contents";

const Page = ({ id }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => (
  <ProjectPage content={contentsRepository.getProject(id)} />
);

export const getStaticProps: GetStaticProps = async (context) => {
  if (typeof context.params?.id !== "string") throw Error();
  return {
    props: { id: context.params.id }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const contentsId = contentsRepository.getProjectContents().map((content) => content.id);
  return {
    paths: contentsId.map((id) => ({ params: { id } })),
    fallback: false
  };
};

export default Page;
