import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Background from "../../components/parts/Background";
import TalkIndexPage from "components/templates/talks-index/TalksIndexPage";
import { TalkRepository } from "data/contents/talks";
import { getContentsId } from "data/contents/talks/fetch";

const Page = ({ contentsId }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/the-fog-is-still-too-thick-for-you-to-see-me");
  }, []);
  return <Background></Background>;

  const repository = new TalkRepository(contentsId);
  return <TalkIndexPage heads={repository.getAllContents("updatedAt")} />;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { contentsId: await getContentsId() }
  };
};

export default Page;
