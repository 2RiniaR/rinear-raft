import { TalkContentHead } from "src/lib/contents/talks/head";
import { ProjectContentHead } from "src/lib/contents/projects/head";

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
