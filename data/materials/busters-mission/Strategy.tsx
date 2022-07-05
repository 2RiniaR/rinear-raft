import { ContentImage, Heading, ListItem, Paragraph, Space, UnorderedList } from "writers";
import stage1Pic from "public/contents/materials/busters-mission/stage1.webp";
import stage2Pic from "public/contents/materials/busters-mission/stage2.webp";
import stage3Pic from "public/contents/materials/busters-mission/stage3-1.webp";
import stage3_2Pic from "public/contents/materials/busters-mission/stage3-2.webp";
import stage3_3Pic from "public/contents/materials/busters-mission/stage3-3.webp";
import resultPic from "public/contents/materials/busters-mission/result.webp";

export const Strategy = (): JSX.Element => (
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

    <Paragraph>ボスは「プレイヤーの追尾」と「攻撃」を交互に繰り返す。</Paragraph>
    <Paragraph>攻撃は3種類あり、それぞれ予備動作が違うため、発動前に判別が可能。</Paragraph>
    <UnorderedList>
      <ListItem>杖を振りかぶる動作→薙ぎ払い</ListItem>
      <ListItem>炎を溜める動作→衝撃波</ListItem>
      <ListItem>杖を高く掲げる動作→メテオ</ListItem>
    </UnorderedList>
    <Paragraph>どの攻撃が来るかを見極めて回避しよう。</Paragraph>

    <ContentImage src={stage3_2Pic} alt="ステージ3 ボス覚醒後" />

    <Paragraph>ボスの残りHPが一定以下になると、大技とともに形態変化を行う。</Paragraph>
    <Paragraph>
      この大技ではボスが杖を掲げ続け、フィールド全体に大量のメテオが降ってくる。また、この大技の発動中はボスへ攻撃が与えられないため、避けることに専念しよう。
    </Paragraph>

    <ContentImage src={stage3_3Pic} alt="ステージ3 ボス覚醒後2" />

    <Paragraph>
      形態変化以降はボスの各攻撃が強化される。さらに、大技の直後はフィールド上にメテオの炎が残った状態で戦うことになるため、炎がない場所にボスを誘導して戦いやすくしよう。
    </Paragraph>

    <ContentImage src={resultPic} alt="リザルト" />

    <Paragraph>ボスを倒すとクリアとなり、クリア時間と残りライフからスコアが計算される。</Paragraph>

    <Space size={1} />
  </>
);
