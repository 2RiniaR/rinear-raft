import HomePageTemplate from "src/components/templates/home";
import { contentsRepository } from "src/data/contents";

const HomePage = (): JSX.Element => <HomePageTemplate news={contentsRepository.getNews()} />;

export default HomePage;
