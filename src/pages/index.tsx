/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getLatestContent } from "../data/pickup";
import { story } from "../data/story";
import Seo from "../components/functions/Seo";
import { rinearDescription } from "../data/description";
import HomePage from "components/templates/home/HomePage";

const Page = ({ pickups }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => (
  <>
    <Seo pageDescription={rinearDescription} pagePath={"/"} pageImgPath={"/img/main.webp"} />
    <HomePage pickups={pickups} story={story} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pickups: await getLatestContent(3) }
  };
};

export default Page;
