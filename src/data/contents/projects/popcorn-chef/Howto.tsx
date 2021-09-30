import ContentImage from "components/parts/contents/ContentImage";
import TitlePic from "public/contents/projects/popcorn-chef/title.jpg";
import LobbyPic from "public/contents/projects/popcorn-chef/lobby.jpg";
import MatchingPic from "public/contents/projects/popcorn-chef/matching.jpg";

const Section = (): JSX.Element => (
  <>
    <p>1. スタート画面で「はじめる」をクリックする</p>
    <ContentImage src={TitlePic} alt="タイトル画面" />
    <p>2. ロビー画面へ移動するので、左下欄にプレイヤー名を入力する</p>
    <ContentImage src={LobbyPic} alt="ロビー画面" />
    <p>3. 部屋を作成、または部屋に参加する</p>
    <ul>
      <li>誰かと遊ぶ場合、「ランダム」の入室ボタンをクリックする</li>
      <li>特定の人と遊ぶ場合、「プライベート」にあいことばを入力し、入室ボタンをクリックする</li>
    </ul>
    <p>4. マッチング画面に移行するので、対戦相手が現れるまで待つ</p>
    <ContentImage src={MatchingPic} alt="マッチング画面" />
  </>
);

export default Section;
