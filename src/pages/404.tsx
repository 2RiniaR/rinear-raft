import { InferGetStaticPropsType } from "next";
import { PageSettings } from "components/functions";
import { fetchSite } from "repositories";
import { NotFoundPage } from "components/templates";

const Page = ({ site }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <>
      <PageSettings
        pageTitle={"Not Found"}
        pageDescription={site.description}
        pagePath={"/"}
        pageImgPath={"/img/main.webp"}
      />
      <NotFoundPage />
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: { site: await fetchSite() }
  };
};

export default Page;
