import ExternalLink from "components/functions/link/ExternalLink";
import { Paragraph } from "content-parts";

const Section = (): JSX.Element => (
  <>
    <Paragraph>
      ゲームのファイルを
      <ExternalLink href="https://www.dropbox.com/sh/h23lhcyl0cwjlh5/AADIuiV0vj4hXrInV_j6YmOqa?dl=0">ここ</ExternalLink>
      からダウンロードしてください。
    </Paragraph>
  </>
);

export default Section;
