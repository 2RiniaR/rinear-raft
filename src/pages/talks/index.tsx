import TalksIndex from "src/components/templates/talks-index";
import { contentsRepository } from "src/data/contents";

const Page = (): JSX.Element => <TalksIndex heads={contentsRepository.getTalkContents("updatedAt")} />;

export default Page;
