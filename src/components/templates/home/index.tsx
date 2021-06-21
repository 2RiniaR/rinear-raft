import Link from "next/link";
import { TalkContentHead } from "src/contents/lib/talks/head";
import { ProjectContentHead } from "src/contents/lib/projects/head";

export type HomePageTemplateParams = {
  talks: TalkContentHead[];
  projects: ProjectContentHead[];
};

export default function HomePageTemplate(): JSX.Element {
  return (
    <div>
      <h2>Home page</h2>
      <Link href="/portal">
        <a>Go to portal</a>
      </Link>
    </div>
  );
}
