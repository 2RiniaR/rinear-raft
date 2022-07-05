import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { PageSettings } from "components/functions";
import { fetchAllMaterialsId, fetchMaterial, fetchSite } from "repositories";
import { MaterialPage } from "components/templates";

const Page = ({ id }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const material = fetchMaterial(id);
  return (
    <>
      <PageSettings
        pageTitle={material.title}
        pageDescription={material.description}
        pagePath={`/materials/${id}`}
        pageImgPath={material.thumbnail.src}
        pageType="article"
      />
      <MaterialPage material={material} />
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
