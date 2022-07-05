import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { PageSettings } from "components/functions";
import { fetchAllLettersId, fetchLetter, fetchSite } from "repositories";
import { LetterPage } from "components/templates";

const Page = ({ id }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const letter = fetchLetter(id);
  return (
    <>
      <PageSettings
        pageTitle={letter.title}
        pageDescription={letter.description}
        pagePath={`/letters/${id}`}
        pageImgPath={letter.thumbnail.src}
        pageType="article"
      />
      <LetterPage letter={letter} />
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
  const contentsId = await fetchAllLettersId();
  return {
    paths: contentsId.map((id) => ({ params: { id } })),
    fallback: false
  };
};

export default Page;
