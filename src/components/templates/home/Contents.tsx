import { TalkContentHead } from "src/contents/lib/talks/head";
import { ProjectContentHead } from "src/contents/lib/projects/head";

export type ContentsParams = {
  talks: TalkContentHead[];
  projects: ProjectContentHead[];
};

export default function Contents(): JSX.Element {
  return (
    <div>
      Contents
    </div>
  );
}
