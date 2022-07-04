import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { PageSettings } from "components/functions";
import { LetterPage } from "components/templates";
import { getLettersId, LetterRepository } from "data";

const Page = ({ id }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const repository = new LetterRepository([id]);
  const content = repository.getContent(id);
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

export const getStaticProps: GetStaticProps = async (context) => {
  if (typeof context.params?.id !== "string") throw Error();
  return {
    props: { id: context.params.id }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const contentsId = await getLettersId();
  return {
    paths: contentsId.map((id) => ({ params: { id } })),
    fallback: false
  };
};

export default Page;
