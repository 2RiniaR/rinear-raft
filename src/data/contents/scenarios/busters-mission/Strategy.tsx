/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import { ContentImage, Heading, Paragraph, Space } from "content-parts";
import stage1Pic from "public/contents/scenarios/busters-mission/stage1.webp";
import stage2Pic from "public/contents/scenarios/busters-mission/stage2.webp";
import stage3Pic from "public/contents/scenarios/busters-mission/stage3.webp";
import stage3_2Pic from "public/contents/scenarios/busters-mission/stage3_2.webp";
import stage3_3Pic from "public/contents/scenarios/busters-mission/stage3_3.webp";
import resultPic from "public/contents/scenarios/busters-mission/result.webp";

const Section = (): JSX.Element => (
  <>
    <Heading level="sub">ステージ1</Heading>

    <ContentImage src={stage1Pic} alt="ステージ1" />

    <Paragraph>すべての敵を倒すとクリア。</Paragraph>
    <Paragraph>
      プレイヤーを追尾し、剣で近接攻撃してくる敵が7体いる。 なるべくダメージを受けないように、慎重に攻撃していこう。
    </Paragraph>

    <Space size={1} />

    <Heading level="sub">ステージ2</Heading>

    <ContentImage src={stage2Pic} alt="ステージ2" />

    <Paragraph>すべての敵を倒すとクリア。</Paragraph>
    <Paragraph>剣で攻撃する敵に加えて、プレイヤーの周りを旋回しながら銃で遠距離攻撃してくる敵が現れる。</Paragraph>
    <Paragraph>中央の壁を使って弾を防いで、射撃後の隙に攻撃しよう。</Paragraph>

    <Space size={1} />

    <Heading level="sub">ステージ3（ボス）</Heading>

    <Paragraph>ボスステージ。ボスの体力を0にするとクリア。</Paragraph>
    <ContentImage src={stage3Pic} alt="ステージ3" />
    <ContentImage src={stage3_2Pic} alt="ステージ3 ボス覚醒後" />
    <ContentImage src={stage3_3Pic} alt="ステージ3 ボス覚醒後2" />

    <ContentImage src={resultPic} alt="リザルト" />

    <Space size={1} />
  </>
);

export default Section;
