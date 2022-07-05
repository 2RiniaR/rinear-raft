import { InferGetStaticPropsType } from "next";
import { PageSettings } from "components/functions";
import { HomePage } from "components/templates";
import { fetchHome, fetchSite } from "repositories";
import { about, story } from "constants/home";

const Page = ({ site, home }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => (
  <>
    <PageSettings pageDescription={site.description} pagePath={"/"} pageImgPath={"/img/main.webp"} pageType="website" />
    <HomePage pickups={home.pickups} story={story} about={about} />
  </>
);

export const getStaticProps = async () => {
  return {
    props: {
      site: await fetchSite(),
      home: await fetchHome()
    }
  };
};

export default Page;
