/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Seo from "../../components/functions/Seo";
import LetterPage from "components/templates/letter/LetterPage";
import { LetterRepository } from "data/contents/letters";
import { getLettersId } from "data/contents/letters/fetch";

const Page = ({ id }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const repository = new LetterRepository([id]);
  const content = repository.getContent(id);
  return (
    <>
      <Seo
        pageTitle={content.title}
        pageDescription={content.description}
        pagePath={`/letters/${id}`}
        pageImgPath={content.thumbnail.src}
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
