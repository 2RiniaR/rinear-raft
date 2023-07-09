import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { client } from "../../../libs/microcms/client";
import { LetterContent } from "../../../libs/microcms/types";
import { LetterTemplate } from "../../../templates";

const Page = ({ content }: InferGetServerSidePropsType<typeof getServerSideProps>) => <LetterTemplate {...content} />;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  if (typeof context.params?.id !== "string" || typeof context.query?.draftKey !== "string") throw Error();
  const data = await client.getListDetail<LetterContent>({
    endpoint: "letters",
    contentId: context.params.id,
    queries: { draftKey: context.query.draftKey }
  });

  return {
    props: {
      content: data
    }
  };
};

export default Page;
