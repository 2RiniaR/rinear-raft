/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import { GetStaticProps, InferGetStaticPropsType } from "next";
import Seo from "../../components/functions/Seo";
import { rinearDescription } from "../../data/description";
import ScenarioIndexPage from "components/templates/scenario-index/ScenarioIndexPage";
import { ScenarioRepository } from "data/contents/scenarios";
import { getScenariosId } from "data/contents/scenarios/fetch";

const Page = ({ contentsId }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const repository = new ScenarioRepository(contentsId);
  return (
    <>
      <Seo
        pageTitle={"Scenarios"}
        pageDescription={rinearDescription}
        pagePath={"/scenarios"}
        pageImgPath={"/img/main.webp"}
      />
      <ScenarioIndexPage heads={repository.getAllContents("releasedAt")} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { contentsId: await getScenariosId() }
  };
};

export default Page;
