import TalksIndexPage from "components/templates/talks-index/TalksIndexPage";
import { contentsRepository } from "data/contents";

const Page = (): JSX.Element => <TalksIndexPage heads={contentsRepository.getTalkContents("updatedAt")} />;

export default Page;
