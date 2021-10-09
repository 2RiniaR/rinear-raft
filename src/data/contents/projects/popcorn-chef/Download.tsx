import ExternalLink from "components/functions/link/ExternalLink";
import { Paragraph } from "content-parts";

const Section = (): JSX.Element => (
  <>
    <Paragraph>
      ゲームのファイルを
      <ExternalLink href="https://www.dropbox.com/sh/vv3gc9hj7myd5m6/AAC1eCgIz-Ro8WfOmFbQNIYwa?dl=0">ここ</ExternalLink>
      からダウンロードしてください。
    </Paragraph>
  </>
);

export default Section;
