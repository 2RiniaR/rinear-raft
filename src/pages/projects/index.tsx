import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Background from "../../components/parts/Background";
import ProjectIndexPage from "components/templates/projects-index/ProjectsIndexPage";
import { ProjectRepository } from "data/contents/projects";
import { getContentsId } from "data/contents/projects/fetch";

const Page = ({ contentsId }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/the-fog-is-still-too-thick-for-you-to-see-me");
  }, []);
  return <Background></Background>;

  const repository = new ProjectRepository(contentsId);
  return <ProjectIndexPage heads={repository.getAllContents("releasedAt")} />;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { contentsId: await getContentsId() }
  };
};

export default Page;
