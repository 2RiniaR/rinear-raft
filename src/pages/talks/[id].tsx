import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import TalkPage from "components/templates/talk/TalkPage";
import { TalkRepository } from "data/contents/talks";
import { getContentsId } from "data/contents/talks/fetch";

const Page = ({ id }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const repository = new TalkRepository([id]);
  return <TalkPage content={repository.getContent(id)} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (typeof context.params?.id !== "string") throw Error();
  return {
    props: { id: context.params.id }, redirect: { permanent: false, destination: "/the-fog-is-still-too-thick-for-you-to-see-me" }
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
