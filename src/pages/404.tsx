/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import Seo from "../components/functions/Seo";
import { rinearDescription } from "../data/description";
import NotFoundPage from "components/templates/not-found/NotFoundPage";

const Page = (): JSX.Element => (
  <>
    <Seo pageDescription={rinearDescription} pagePath={"/"} pageImgPath={"/img/main.webp"} />
    <NotFoundPage />
  </>
);

export default Page;
