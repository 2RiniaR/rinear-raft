import { InferGetStaticPropsType } from "next";
import { mapAsync } from "utils/promise";
import { PageSettings } from "components/functions";
import { fetchAllMaterialsId, fetchMaterial, fetchSite } from "repositories";
import { FallbackPage, MaterialIndexPage } from "components/templates";
import { useAsyncInitialize } from "fooks";

const Page = ({ site, materialsId }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const contents = useAsyncInitialize(() => mapAsync(materialsId, (id) => fetchMaterial(id)));
  if (contents === undefined) return <FallbackPage />;
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
