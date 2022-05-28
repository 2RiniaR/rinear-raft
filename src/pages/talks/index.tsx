import { GetStaticProps, InferGetStaticPropsType } from "next";
import TalkIndexPage from "components/templates/talks-index/TalksIndexPage";
import { TalkRepository } from "data/contents/talks";
import { getContentsId } from "data/contents/talks/fetch";

const Page = ({ contentsId }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const repository = new TalkRepository(contentsId);
  return <TalkIndexPage heads={repository.getAllContents("updatedAt")} />;
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: { contentsId: await getContentsId() }, redirect: { permanent: false, destination: "/the-fog-is-still-too-thick-for-you-to-see-me" }  };
};

export default Page;
