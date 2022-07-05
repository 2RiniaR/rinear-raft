import { GetStaticProps, InferGetStaticPropsType } from "next";
import { PageSettings } from "components/functions";
import { HomePage } from "components/templates";
import { fetchPickupContents, getHomeSettings, getSiteSettings } from "repositories";

const Page = ({ pickups }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const { description } = getSiteSettings();
  const { story, about } = getHomeSettings();
  return (
    <>
      <PageSettings pageDescription={description} pagePath={"/"} pageImgPath={"/img/main.webp"} pageType="website" />
      <HomePage pickups={pickups} story={story} about={about} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pickups: await fetchPickupContents() }
  };
};

export default Page;
