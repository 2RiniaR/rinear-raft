import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { client } from "../../libs/microcms/client";
import { MaterialContent } from "../../libs/microcms/types";
import { MaterialTemplate } from "templates";

const Page = ({ content }: InferGetStaticPropsType<typeof getStaticProps>) => <MaterialTemplate {...content} />;

export const getStaticProps = async (context: GetStaticPropsContext) => {
  if (typeof context.params?.id !== "string") throw Error();
  const data = await client.getListDetail<MaterialContent>({ endpoint: "materials", contentId: context.params.id });

  return {
    props: {
      content: data
    }
  };
};

export const getStaticPaths = async () => {
  const data = await client.getList<MaterialContent>({
    endpoint: "materials",
    queries: {
      limit: 20
    }
  });

  return {
    paths: data.contents.map((content) => ({ params: { id: content.id } })),
    fallback: false
  };
};

export default Page;
