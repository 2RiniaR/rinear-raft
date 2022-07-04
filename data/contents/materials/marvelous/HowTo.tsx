import { ExternalLink, Paragraph } from "components/writers";

export const HowTo = (): JSX.Element => (
  <>
    <Paragraph>
      当botはマルチサーバーに対応しておらず、完全招待制サーバー
      <ExternalLink href="https://approvers.dev/">「限界開発鯖」</ExternalLink>
      内でのみ利用可能です。
    </Paragraph>
  </>
);
