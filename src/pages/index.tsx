/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getLatestContent } from "../data/pickup";
import { story } from "../data/story";
import HomePage from "components/templates/home/HomePage";

const Page = ({ pickups }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return <HomePage pickups={pickups} story={story} />;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pickups: await getLatestContent(3) }
  };
};

export default Page;
