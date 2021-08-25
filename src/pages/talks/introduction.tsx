import TalkPageTemplate from "src/components/templates/talk/TalkPage";
import introduction from "src/data/contents/talks/introduction";

const Page = (): JSX.Element => <TalkPageTemplate content={introduction} />;

export default Page;
