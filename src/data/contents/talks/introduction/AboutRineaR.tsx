import { Paragraph, Space } from "content-parts";

const Section = (): JSX.Element => (
  <>
    <Paragraph>
      紛らわしいからちょっと説明すると、ここの裏方にいる人物、つまり今こうして話しているのは私、Rinia（りにあ）です。
    </Paragraph>
    <Paragraph>
      で、私の個人活動とか作品とか、それらをひっくるめてRineaR（「りにあー」、または「りにああーる」）と呼んでます。RineaRは一連のプロジェクトとかじゃなくて、単に
      <strong>個人活動の集合体</strong>なんです。
    </Paragraph>
    <Paragraph>だから、呼ぶときはこれまで通りRiniaで呼んでいただければと思います。</Paragraph>
    <Space size={4} />
    <Paragraph>
      活動方針としては、プロジェクトとか作ったものを、作品置き場みたいにこのサイトの「Projects」に投稿していきます。ゲームのダウンロードがしたい場合は、そこから飛べばダウンロードできると思います。
    </Paragraph>
    <Paragraph>
      他に、制作の過程とか裏話みたいなものとかは「Talks」の方に書いていくんですけど、あくまでトークなのでそこまで深く考えた内容とかを投稿することはそんなにないです。
    </Paragraph>
  </>
);

export default Section;
