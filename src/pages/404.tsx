import { PageSettings } from "components/functions";
import { getSiteSettings } from "repositories";
import { NotFoundPage } from "components/templates";

const Page = (): JSX.Element => {
  const { description } = getSiteSettings();
  return (
    <>
      <PageSettings
        pageTitle={"Not Found"}
        pageDescription={description}
        pagePath={"/"}
        pageImgPath={"/img/main.webp"}
      />
      <NotFoundPage />
    </>
  );
};

export default Page;
