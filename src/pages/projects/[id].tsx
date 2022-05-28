import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Background from "../../components/parts/Background";
import ProjectPage from "components/templates/project/ProjectPage";
import { ProjectRepository } from "data/contents/projects";
import { getContentsId } from "data/contents/projects/fetch";

const Page = ({ id }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/the-fog-is-still-too-thick-for-you-to-see-me");
  }, []);
  return <Background></Background>;

  const repository = new ProjectRepository([id]);
  return <ProjectPage content={repository.getContent(id)} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (typeof context.params?.id !== "string") throw Error();
  return {
    props: { id: context.params.id }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const contentsId = await getContentsId();
  return {
    paths: contentsId.map((id) => ({ params: { id } })),
    fallback: false
  };
};

export default Page;
