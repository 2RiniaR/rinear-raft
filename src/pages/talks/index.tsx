import TalkIndex from "src/components/templates/TalkIndex";
import { contentsRepository } from "src/data/contents";

const Page = (): JSX.Element => <TalkIndex heads={contentsRepository.getTalkContents()} />;

export default Page;
