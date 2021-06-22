import { GetStaticProps, InferGetStaticPropsType } from "next";
import { TalkContentHeadEncoded } from "src/lib/contents/talks/head";
import { getAllTalkContentHeads } from "src/data/contents/talks";

type TalksIndexPageParams = {
  heads: TalkContentHeadEncoded[];
};

export default function TalksIndexPage({ heads }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  console.log(heads);
  return (
    <div>
      <h2>Talks index page</h2>
    </div>
  );
}

export const getStaticProps: GetStaticProps<TalksIndexPageParams> = async () => {
  const heads = await getAllTalkContentHeads();
  return { props: { heads: heads.map((head) => head.encode()) } };
};
