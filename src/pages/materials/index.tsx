import { InferGetStaticPropsType } from "next";
import { PageSettings } from "components/functions";
import { fetchAllMaterialsId, fetchMaterial, fetchSite } from "repositories";
import { MaterialIndexPage } from "components/templates";

const Page = ({ site, materialsId }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const contents = materialsId.map((id) => fetchMaterial(id));
  return (
    <>
      <PageSettings
        pageTitle={"Materials"}
        pageDescription={site.description}
        pagePath={"/materials"}
        pageImgPath={"/img/main.webp"}
        pageType="article"
      />
      <MaterialIndexPage heads={contents} />
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      site: await fetchSite(),
      materialsId: await fetchAllMaterialsId()
    }
  };
};

export default Page;
