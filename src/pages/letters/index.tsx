import { InferGetStaticPropsType } from "next";
import { useAsyncInitialize } from "fooks";
import { mapAsync } from "utils/promise";
import { PageSettings } from "components/functions";
import { fetchAllLettersId, fetchLetter, fetchSite } from "repositories";
import { FallbackPage, LetterIndexPage } from "components/templates";

const Page = ({ site, lettersId }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const contents = useAsyncInitialize(() => mapAsync(lettersId, (id) => fetchLetter(id)));
  if (contents === undefined) return <FallbackPage />;
  return (
    <>
      <PageSettings
        pageTitle={"Letters"}
        pageDescription={site.description}
        pagePath={"/letters"}
        pageImgPath={"/img/main.webp"}
        pageType="article"
      />
      <LetterIndexPage heads={contents} />
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
