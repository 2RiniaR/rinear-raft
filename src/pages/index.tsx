import HomePageTemplate from "src/components/templates/home";
import { contentsRepository } from "src/data/contents";

const HomePage = (): JSX.Element => (
  <HomePageTemplate talks={contentsRepository.getTalkContents()} projects={contentsRepository.getProjectContents()} />
);

export default HomePage;
