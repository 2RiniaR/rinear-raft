import { GetStaticProps, InferGetStaticPropsType } from "next";
import { about, description, getPickUps, story } from "data";
import { PageSettings } from "components/functions";
import { HomePage } from "components/templates/home";

const Page = ({ pickups }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => (
  <>
    <PageSettings pageDescription={description} pagePath={"/"} pageImgPath={"/img/main.webp"} pageType="website" />
    <HomePage pickups={pickups} story={story} about={about} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pickups: await getPickUps() }
  };
};

export default Page;
