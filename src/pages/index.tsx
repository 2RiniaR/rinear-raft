import HomePage from "components/templates/home/HomePage";
import { GetStaticProps } from "next";

const Page = (): JSX.Element => <HomePage />;

export const getStaticProps: GetStaticProps = async () => {
  return { redirect: { permanent: false, destination: "/the-fog-is-still-too-thick-for-you-to-see-me" } };
};

export default Page;
