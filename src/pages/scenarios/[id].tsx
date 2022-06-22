/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import ScenarioPage from "components/templates/scenario/ScenarioPage";
import { ScenarioRepository } from "data/contents/scenarios";
import { getScenariosId } from "data/contents/scenarios/fetch";

const Page = ({ id }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const repository = new ScenarioRepository([id]);
  return <ScenarioPage content={repository.getContent(id)} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (typeof context.params?.id !== "string") throw Error();
  return {
    props: { id: context.params.id }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const contentsId = await getScenariosId();
  return {
    paths: contentsId.map((id) => ({ params: { id } })),
    fallback: false
  };
};

export default Page;
