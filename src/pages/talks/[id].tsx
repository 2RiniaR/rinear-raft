import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import TalkPage from "components/templates/talk/TalkPage";
import { contentsRepository } from "data/contents";

const Page = ({ id }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => (
  <TalkPage content={contentsRepository.getTalk(id)} />
);

export const getStaticProps: GetStaticProps = async (context) => {
  if (typeof context.params?.id !== "string") throw Error();
  return {
    props: { id: context.params.id }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const contentsId = contentsRepository.getTalkContents().map((content) => content.id);
  return {
    paths: contentsId.map((id) => ({ params: { id } })),
    fallback: false
  };
};

export default Page;
