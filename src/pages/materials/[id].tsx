import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { PageSettings } from "components/functions";
import { fetchAllMaterialsId, fetchMaterial, fetchSite } from "repositories";
import { FallbackPage, MaterialPage } from "components/templates";
import { useAsyncInitialize } from "fooks";

const Page = ({ id }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const content = useAsyncInitialize(() => fetchMaterial(id));
  if (content === undefined) return <FallbackPage />;
  return (
    <>
      <PageSettings
        pageTitle={content.title}
        pageDescription={content.description}
        pagePath={`/materials/${id}`}
        pageImgPath={content.thumbnail.src}
        pageType="article"
      />
      <MaterialPage content={content} />
    </>
  );
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  if (typeof context.params?.id !== "string") throw Error();
  return {
    props: {
      site: await fetchSite(),
      id: context.params.id
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const contentsId = await fetchAllMaterialsId();
  return {
    paths: contentsId.map((id) => ({ params: { id } })),
    fallback: false
  };
};

export default Page;
