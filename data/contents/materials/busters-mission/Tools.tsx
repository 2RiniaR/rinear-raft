import { ExternalLink, Heading, ListItem, UnorderedList } from "components/writers";

export const Tools = (): JSX.Element => (
  <>
    <Heading level="sub">言語・ライブラリ</Heading>
    <UnorderedList>
      <ListItem>C++（Microsoft Visual C++）</ListItem>
      <ListItem>
        <ExternalLink href="https://dxlib.xsrv.jp/">DXライブラリ</ExternalLink>
      </ListItem>
    </UnorderedList>
  </>
);
