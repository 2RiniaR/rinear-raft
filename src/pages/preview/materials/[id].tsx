import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { client } from "../../../libs/microcms/client";
import { MaterialContent } from "../../../libs/microcms/types";
import { MaterialTemplate } from "../../../templates";

const Page = ({ content }: InferGetServerSidePropsType<typeof getServerSideProps>) => <MaterialTemplate {...content} />;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  if (typeof context.params?.id !== "string" || typeof context.query?.draftKey !== "string") throw Error();
  const data = await client.getListDetail<MaterialContent>({
    endpoint: "materials",
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
