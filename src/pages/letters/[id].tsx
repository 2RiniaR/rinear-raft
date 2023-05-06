import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { client } from "../../libs/microcms/client";
import { LetterContent } from "../../libs/microcms/types";
import { LetterTemplate } from "templates";

const Page = ({ content }: InferGetStaticPropsType<typeof getStaticProps>) => <LetterTemplate {...content} />;

export const getStaticProps = async (context: GetStaticPropsContext) => {
  if (typeof context.params?.id !== "string") throw Error();
  const data = await client.getListDetail<LetterContent>({ endpoint: "letters", contentId: context.params.id });

  return {
    props: {
      content: data
    }
  };
};

export const getStaticPaths = async () => {
  const data = await client.getList<LetterContent>({ endpoint: "letters" });

  return {
    paths: data.contents.map((content) => ({ params: { id: content.id } })),
    fallback: false
  };
};

export default Page;
