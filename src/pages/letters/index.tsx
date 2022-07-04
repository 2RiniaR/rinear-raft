import { GetStaticProps, InferGetStaticPropsType } from "next";
import { PageSettings } from "components/functions";
import { LetterIndexPage } from "components/templates";
import { description, getLettersId, LetterRepository } from "data";

const Page = ({ contentsId }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const repository = new LetterRepository(contentsId);
  return (
    <>
      <PageSettings
        pageTitle={"Letters"}
        pageDescription={description}
        pagePath={"/letters"}
        pageImgPath={"/img/main.webp"}
        pageType="article"
      />
      <LetterIndexPage heads={repository.getAllContents("updatedAt")} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { contentsId: await getLettersId() }
  };
};

export default Page;
