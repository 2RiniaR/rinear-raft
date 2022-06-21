/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import LetterPage from "components/templates/letter/LetterPage";
import { LetterRepository } from "data/contents/letters";
import { getContentsId } from "data/contents/letters/fetch";

const Page = ({ id }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const repository = new LetterRepository([id]);
  return <LetterPage content={repository.getContent(id)} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (typeof context.params?.id !== "string") throw Error();
  return {
    props: { id: context.params.id }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const contentsId = await getContentsId();
  return {
    paths: contentsId.map((id) => ({ params: { id } })),
    fallback: false
  };
};

export default Page;
