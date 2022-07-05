import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { PageSettings } from "components/functions";
import { MaterialRepository } from "repositories";
import { MaterialPage } from "components/templates";

const Page = ({ id }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const repository = new MaterialRepository([id]);
  const content = repository.getContent(id);
  return (
    <>
      <PageSettings
        pageTitle={content.title}
        pageDescription={content.description}
        pagePath={`/materials/${id}`}
        pageImgPath={content.thumbnail.src}
        pageType="article"
      />
      <MaterialPage content={content} />
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
  const contentsId = await MaterialRepository.fetchContentsId();
  return {
    paths: contentsId.map((id) => ({ params: { id } })),
    fallback: false
  };
};

export default Page;
