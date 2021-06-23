import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getAllContentHeads } from "src/data/contents";
import HomePageTemplate from "src/components/templates/home";
import {
  decodeContentHead,
  ProjectContentHead,
  ProjectContentHeadEncoded,
  TalkContentHead,
  TalkContentHeadEncoded
} from "src/lib/contents";

type HomePageParams = {
  talks: TalkContentHeadEncoded[];
  projects: ProjectContentHeadEncoded[];
};

const HomePage = ({ talks, projects }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => (
  <HomePageTemplate
    talks={talks.map((talk) => decodeContentHead<TalkContentHead>(talk))}
    projects={projects.map((project) => decodeContentHead<ProjectContentHead>(project))}
  />
);

export default HomePage;

export const getStaticProps: GetStaticProps<HomePageParams> = async () => {
  const talks = await getAllContentHeads<TalkContentHead>("talks");
  const projects = await getAllContentHeads<ProjectContentHead>("projects");
  return {
    props: {
      talks: talks.map((head) => head.encode()),
      projects: projects.map((head) => head.encode())
    }
  };
};
