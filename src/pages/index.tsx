import { useEffect } from "react";
import { useRouter } from "next/router";
import Background from "../components/parts/Background";
import HomePage from "components/templates/home/HomePage";

const Page = (): JSX.Element => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/the-fog-is-still-too-thick-for-you-to-see-me");
  }, []);
  return <Background></Background>;

  return <HomePage />;
};

export default Page;
