import { Heading, ListItem, UnorderedList } from "content-parts";

const Section = (): JSX.Element => (
  <>
    <Heading level="sub">言語・ライブラリ等</Heading>
    <UnorderedList>
      <ListItem>React</ListItem>
      <ListItem>Next.js</ListItem>
      <ListItem>TypeScript</ListItem>
      <ListItem>SCSS</ListItem>
    </UnorderedList>

    <Heading level="sub">デザインツール</Heading>
    <UnorderedList>
      <ListItem>Adobe Illustrator</ListItem>
      <ListItem>Adobe Photoshop</ListItem>
      <ListItem>Adobe XD</ListItem>
      <ListItem>Blender</ListItem>
      <ListItem>CLIP STUDIO PAINT</ListItem>
    </UnorderedList>
  </>
);

export default Section;
