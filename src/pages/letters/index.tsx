import { GetStaticProps, InferGetStaticPropsType } from "next";
import Seo from "../../components/functions/Seo";
import { rinearDescription } from "../../data/description";
import LetterIndexPage from "components/templates/letter-index/LetterIndexPage";
import { LetterRepository } from "data/contents/letters";
import { getLettersId } from "data/contents/letters/fetch";

const Page = ({ contentsId }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const repository = new LetterRepository(contentsId);
  return (
    <>
      <Seo
        pageTitle={"Letters"}
        pageDescription={rinearDescription}
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
