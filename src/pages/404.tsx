import { PageSettings } from "components/functions";
import { description } from "data";
import { NotFoundPage } from "components/templates";

const Page = (): JSX.Element => (
  <>
    <PageSettings pageTitle={"Not Found"} pageDescription={description} pagePath={"/"} pageImgPath={"/img/main.webp"} />
    <NotFoundPage />
  </>
);

export default Page;
