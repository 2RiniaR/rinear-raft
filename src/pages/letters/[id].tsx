import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { PageSettings } from "components/functions";
import { fetchAllLettersId, fetchLetter, fetchSite } from "repositories";
import { LetterPage } from "components/templates";

const Page = ({ id }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const content = fetchLetter(id);
  return (
    <>
      <PageSettings
        pageTitle={content.title}
        pageDescription={content.description}
        pagePath={`/letters/${id}`}
        pageImgPath={content.thumbnail.src}
        pageType="article"
      />
      <LetterPage content={content} />
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
