import { ExternalLink, Heading, ListItem, UnorderedList } from "writers";

export const Tools = (): JSX.Element => (
  <>
    <Heading level="sub">言語・ライブラリ等</Heading>
    <UnorderedList>
      <ListItem>C++（Microsoft Visual C++）</ListItem>
      <ListItem>
        <ExternalLink href="https://dxlib.xsrv.jp/">DXライブラリ</ExternalLink>
      </ListItem>
    </UnorderedList>
  </>
);
