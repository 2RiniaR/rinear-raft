import Space from "components/parts/contents/Space";

const Section = (): JSX.Element => (
  <>
    <p>
      プレイヤーを上下左右に移動し、制限時間以内にステージのゴールに触ればクリア。
      ただし、残り時間が0になるか残りライフが0になるとゲームオーバー。ライフは「針山」や「マグマ」に触れると1だけ減少します。
      ステージ内に散らばっているアイテムを駆使してクリア・高スコアを狙おう！
    </p>
    <Space size={2} />
    <h2>操作方法（メニュー時）</h2>
    <ul>
      <li>↑↓←→：カーソル移動</li>
      <li>Z：決定</li>
    </ul>
    <Space size={2} />
    <h2>操作方法（ゲーム時）</h2>
    <ul>
      <li>↑↓←→：移動</li>
      <li>左Shift + ↑↓←→：低速移動</li>
      <li>Space：ポーズメニュー</li>
    </ul>
  </>
);

export default Section;
