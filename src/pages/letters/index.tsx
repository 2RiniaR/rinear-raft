import { InferGetStaticPropsType } from "next";
import { PageSettings } from "components/functions";
import { fetchAllLettersId, fetchLetter, fetchSite } from "repositories";
import { LetterIndexPage } from "components/templates";

const Page = ({ site, lettersId }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const letters = lettersId.map((id) => fetchLetter(id));
  return (
    <>
      <PageSettings
        pageTitle={"Letters"}
        pageDescription={site.description}
        pagePath={"/letters"}
        pageImgPath={"/img/main.webp"}
        pageType="article"
      />
      <LetterIndexPage letters={letters} />
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      site: await fetchSite(),
      lettersId: await fetchAllLettersId()
    }
  };
};

export default Page;
