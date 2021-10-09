import TitlePic from "public/contents/projects/popcorn-chef/title.jpg";
import LobbyPic from "public/contents/projects/popcorn-chef/lobby.jpg";
import MatchingPic from "public/contents/projects/popcorn-chef/matching.jpg";
import { ContentImage, ListItem, Paragraph, UnorderedList } from "content-parts";

const Section = (): JSX.Element => (
  <>
    <Paragraph>1. スタート画面で「はじめる」をクリックする</Paragraph>
    <ContentImage src={TitlePic} alt="タイトル画面" />
    <Paragraph>2. ロビー画面へ移動するので、左下欄にプレイヤー名を入力する</Paragraph>
    <ContentImage src={LobbyPic} alt="ロビー画面" />
    <Paragraph>3. 部屋を作成、または部屋に参加する</Paragraph>
    <UnorderedList>
      <ListItem>誰かと遊ぶ場合、「ランダム」の入室ボタンをクリックする</ListItem>
      <ListItem>特定の人と遊ぶ場合、「プライベート」にあいことばを入力し、入室ボタンをクリックする</ListItem>
    </UnorderedList>
    <Paragraph>4. マッチング画面に移行するので、対戦相手が現れるまで待つ</Paragraph>
    <ContentImage src={MatchingPic} alt="マッチング画面" />
  </>
);

export default Section;
