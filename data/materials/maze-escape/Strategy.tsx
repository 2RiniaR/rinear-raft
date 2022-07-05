import { ContentImage, Heading, Paragraph, Space } from "writers";
import stage1Pic from "public/contents/materials/maze-escape/stage1.webp";
import stage2Pic from "public/contents/materials/maze-escape/stage2.webp";
import stage3Pic from "public/contents/materials/maze-escape/stage3.webp";

export const Strategy = (): JSX.Element => (
  <>
    <Heading level="sub">ステージ1</Heading>

    <ContentImage src={stage1Pic} alt="ステージ1" />

    <Paragraph>
      泥と針によるギミックがメインのステージ。スピードアップパネルによる加速や、針無効のアイテムが設置されているため、利用しよう。
    </Paragraph>

    <Space size={1} />

    <Heading level="sub">ステージ2</Heading>

    <ContentImage src={stage2Pic} alt="ステージ2" />

    <Paragraph>
      氷のギミックがメインのステージ。氷の上では急に止まれないため、勢い余って針を踏まないように低速移動を活用しよう。
    </Paragraph>
    <Paragraph>
      また、針が大量に登場する場所は、ダメージ後の無敵時間を利用して一気に駆け抜けてしまうのもアリ。もしくは、氷を一定時間無効化できるアイテムが設置されているため、これを利用して安全に進もう。
    </Paragraph>

    <Space size={1} />

    <Heading level="sub">ステージ3</Heading>

    <ContentImage src={stage3Pic} alt="ステージ3" />

    <Paragraph>
      マグマとベルトコンベアのギミックがメインの最難関ステージ。足場が非常に狭い上に不安定なので、正確なコントロールが求められる。
    </Paragraph>

    <Paragraph>
      マグマの上では常にダメージを受け続けるうえ、移動速度も低下するため無理矢理突っ切ることはできない。ステージの構造やアイテムの場所を把握し、時には慎重に、時にはダメージ覚悟でゴールを目指そう。
    </Paragraph>

    <Space size={1} />
  </>
);
