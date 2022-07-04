import TitlePic from "public/contents/materials/popcorn-chef/title.webp";
import LobbyPic from "public/contents/materials/popcorn-chef/lobby.webp";
import MatchingPic from "public/contents/materials/popcorn-chef/matching.webp";
import { ContentImage, ListItem, OrderedList, UnorderedList } from "components/writers";

export const HowTo = (): JSX.Element => (
  <>
    <OrderedList>
      <ListItem>
        スタート画面で「はじめる」をクリックする
        <ContentImage src={TitlePic} alt="タイトル画面" />
      </ListItem>
      <ListItem>
        ロビー画面へ移動するので、左下欄にプレイヤー名を入力する
        <ContentImage src={LobbyPic} alt="ロビー画面" />
      </ListItem>
      <ListItem>
        部屋を作成、または部屋に参加する
        <UnorderedList>
          <ListItem>誰かと遊ぶ場合、「ランダム」の入室ボタンをクリックする</ListItem>
          <ListItem>特定の人と遊ぶ場合、「プライベート」にあいことばを入力し、入室ボタンをクリックする</ListItem>
        </UnorderedList>
      </ListItem>
      <ListItem>
        マッチング画面に移行するので、対戦相手が現れるまで待つ
        <ContentImage src={MatchingPic} alt="マッチング画面" />
      </ListItem>
    </OrderedList>
  </>
);
