import TalksIndexPage from "src/components/templates/talks-index/TalksIndexPage";
import { contentsRepository } from "src/data/contents";

const Page = (): JSX.Element => <TalksIndexPage heads={contentsRepository.getTalkContents("updatedAt")} />;

export default Page;
