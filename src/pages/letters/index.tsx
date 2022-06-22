/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import { GetStaticProps, InferGetStaticPropsType } from "next";
import LetterIndexPage from "components/templates/letter-index/LetterIndexPage";
import { LetterRepository } from "data/contents/letters";
import { getLettersId } from "data/contents/letters/fetch";

const Page = ({ contentsId }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const repository = new LetterRepository(contentsId);
  return <LetterIndexPage heads={repository.getAllContents("updatedAt")} />;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { contentsId: await getLettersId() }
  };
};

export default Page;
