import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Background from "../../components/parts/Background";
import TalkPage from "components/templates/talk/TalkPage";
import { TalkRepository } from "data/contents/talks";
import { getContentsId } from "data/contents/talks/fetch";

const Page = ({ id }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/the-fog-is-still-too-thick-for-you-to-see-me");
  }, []);
  return <Background></Background>;

  const repository = new TalkRepository([id]);
  return <TalkPage content={repository.getContent(id)} />;
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
