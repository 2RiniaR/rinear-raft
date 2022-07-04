import { GetStaticProps, InferGetStaticPropsType } from "next";
import { PageSettings } from "components/functions";
import { description, getMaterialsId, MaterialRepository } from "data";
import { MaterialIndexPage } from "components/templates";

const Page = ({ contentsId }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const repository = new MaterialRepository(contentsId);
  return (
    <>
      <PageSettings
        pageTitle={"Materials"}
        pageDescription={description}
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
