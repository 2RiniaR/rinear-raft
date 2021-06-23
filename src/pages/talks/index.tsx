import { GetStaticProps, InferGetStaticPropsType } from "next";
import { TalkContentHead, TalkContentHeadEncoded } from "src/lib/contents/talks/head";
import { getAllContentHeads } from "src/data/contents";

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
  const heads = await getAllContentHeads<TalkContentHead>("talks");
  return { props: { heads: heads.map((head) => head.encode()) } };
};
