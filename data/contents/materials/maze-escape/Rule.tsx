import { Heading, ListItem, Paragraph, UnorderedList } from "components/writers";

export const Rule = (): JSX.Element => (
  <>
    <Paragraph>
      プレイヤーを上下左右に移動し、制限時間以内にステージのゴールに触ればクリア。
      ただし、残り時間が0になるか残りライフが0になるとゲームオーバー。ライフは「針山」や「マグマ」に触れると1だけ減少します。
      ステージ内に散らばっているアイテムを駆使してクリア・高スコアを狙おう！
    </Paragraph>
    <Heading level="sub">操作方法（メニュー時）</Heading>
    <UnorderedList>
      <ListItem>↑↓←→：カーソル移動</ListItem>
      <ListItem>Z：決定</ListItem>
    </UnorderedList>
    <Heading level="sub">操作方法（ゲーム時）</Heading>
    <UnorderedList>
      <ListItem>↑↓←→：移動</ListItem>
      <ListItem>左Shift + ↑↓←→：低速移動</ListItem>
      <ListItem>Space：ポーズメニュー</ListItem>
    </UnorderedList>
  </>
);
