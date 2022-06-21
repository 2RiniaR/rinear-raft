/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import { Heading, Paragraph, Space } from "content-parts";

const Section = (): JSX.Element => (
  <>
    <Heading level="sub">ステージ1</Heading>

    <Paragraph>すべての敵を倒すとクリア。</Paragraph>
    <Paragraph>
      プレイヤーを追尾し、剣で近接攻撃してくる敵が7体いる。 なるべくダメージを受けないように、慎重に攻撃していこう。
    </Paragraph>

    <Space size={1} />

    <Heading level="sub">ステージ2</Heading>

    <Paragraph>すべての敵を倒すとクリア。</Paragraph>
    <Paragraph>剣で攻撃する敵に加えて、プレイヤーの周りを旋回しながら銃で遠距離攻撃してくる敵が現れる。</Paragraph>
    <Paragraph>中央の壁を使って弾を防いで、射撃後の隙に攻撃しよう。</Paragraph>

    <Space size={1} />

    <Heading level="sub">ステージ3（ボス）</Heading>

    <Paragraph>ボスステージ。ボスの体力を0にするとクリア。</Paragraph>

    <Space size={1} />
  </>
);

export default Section;
