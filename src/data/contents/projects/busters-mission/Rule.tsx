import Space from "components/parts/contents/Space";

const Section = (): JSX.Element => (
  <>
    <p>
      ステージ上のすべての敵を倒すとステージが進み、プレイヤーのライフが回復します。
      最後のステージに待ち構えるボスを倒すとクリア。
      クリアすると、残りライフと経過時間からスコアが算出されます。ハイスコアを狙おう！
      ただし、残りライフが0になるとゲームオーバー。ライフは敵の攻撃に当たると減少します。
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
      <li>Z：剣を振る</li>
      <li>M：ポーズメニュー</li>
    </ul>
  </>
);

export default Section;
