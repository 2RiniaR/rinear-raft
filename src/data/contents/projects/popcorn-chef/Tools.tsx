import { Heading, ListItem, UnorderedList } from "content-parts";

const Section = (): JSX.Element => (
  <>
    <Heading level="sub">言語・ライブラリ</Heading>
    <UnorderedList>
      <ListItem>Unity 2019.1.9f1</ListItem>
      <ListItem>UniRx</ListItem>
      <ListItem>UniTask</ListItem>
      <ListItem>Photon Unity Network</ListItem>
    </UnorderedList>
  </>
);

export default Section;
