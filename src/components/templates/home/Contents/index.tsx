import { TalkContentHead, ProjectContentHead } from "src/lib/contents";

export type ContentsParams = {
  talks: TalkContentHead[];
  projects: ProjectContentHead[];
};

export default function Contents({ talks, projects }: ContentsParams): JSX.Element {
  return (
    <div>
      Contents
    </div>
  );
}
