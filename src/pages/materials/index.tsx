import { GetStaticProps, InferGetStaticPropsType } from "next";
import { rinearDescription } from "../../data/description";
import Seo from "../../components/functions/Seo";
import MaterialIndexPage from "components/templates/material-index/MaterialIndexPage";
import { MaterialRepository } from "data/contents/materials";
import { getMaterialsId } from "data/contents/materials/fetch";

const Page = ({ contentsId }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const repository = new MaterialRepository(contentsId);
  return (
    <>
      <Seo
        pageTitle={"Materials"}
        pageDescription={rinearDescription}
        pagePath={"/materials"}
        pageImgPath={"/img/main.webp"}
        pageType="article"
      />
      <MaterialIndexPage heads={repository.getAllContents("releasedAt")} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { contentsId: await getMaterialsId() }
  };
};

export default Page;
