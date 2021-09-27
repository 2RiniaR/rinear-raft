import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import styles from "../talks.module.scss";
import { ChapterPoint, ContentPageProps, TalkContent } from "lib/contents";
import Space from "components/parts/Space";

const Page = ({ setChapters }: ContentPageProps): JSX.Element => {
  const refs: { [name: string]: ChapterPoint } = {
    aboutHomePage: { name: "ホームページ設立おめでとうございます！", ref: useRef(null) },
    aboutRineaR: { name: "RineaRとは？", ref: useRef(null) },
    aboutLink: { name: "外部サービスのアカウントとかありますか？", ref: useRef(null) },
    aboutTechnology: { name: "技術的なことって「Talks」で話すんですか？", ref: useRef(null) },
    aboutCatchphrase: { name: "「この筏は私を、どこへ連れて行くんだろう。」って何ですか？", ref: useRef(null) }
  };

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <main className={styles.content}>
      <section ref={refs.aboutHomePage.ref}>
        <h1>{refs.aboutHomePage.name}</h1>
        <p>ありがとうございます。前々から作品置き場みたいなのが欲しかったんですよね。</p>
        <p>一応前ポートフォリオサイトなるものもあったんですけど、デザインが＼お粗末／すぎて消し飛ばしました。</p>
        <p>
          そこから「いつか作ろう、作ろう」って思ってたんですけど、色々諸々あって作ってなくて、数年越しに今やっと作る気になった感じです。
        </p>
        <p>
          でも、ポートフォリオサイトって自分をアピールするためにあるものじゃないですか。私の場合はそうじゃなくて、
          <strong>自分の活動拠点</strong>
          が欲しくて。それもあって、前のはシンプルなサイトだったんですけど、今回は自分の家みたいな気持ちで作ってました。
        </p>
      </section>

      <section ref={refs.aboutRineaR.ref}>
        <h1>{refs.aboutRineaR.name}</h1>
        <p>
          紛らわしいからちょっと説明すると、ここの裏方にいる人物、つまり今こうして話しているのは私、Rinia（りにあ）です。
        </p>
        <p>
          で、私の個人活動とか作品とか、それらをひっくるめてRineaR（「りにあー」、または「りにああーる」）と呼んでます。RineaRは一連のプロジェクトとかじゃなくて、単に
          <strong>個人活動の集合体</strong>なんです。
        </p>
        <p>だから、呼ぶときはこれまで通りRiniaで呼んでいただければと思います。</p>
        <Space size={4} />
        <p>
          活動方針としては、プロジェクトとか作ったものを、作品置き場みたいにこのサイトの「Projects」に投稿していきます。ゲームのダウンロードがしたい場合は、そこから飛べばダウンロードできると思います。
        </p>
        <p>
          他に、制作の過程とか裏話みたいなものとかは「Talks」の方に書いていくんですけど、あくまでトークなのでそこまで深く考えた内容とかを投稿することはそんなにないです。
        </p>
      </section>

      <section ref={refs.aboutLink.ref}>
        <h1>{refs.aboutLink.name}</h1>
        <p>このページの一番下に各サイトへのリンクがあります。</p>
      </section>

      <section ref={refs.aboutTechnology.ref}>
        <h1>{refs.aboutTechnology.name}</h1>
        <p>
          技術的なことも含めてなんですけど、<strong>制作の裏方にあたる専門知識はあまり表に出すつもりはない</strong>
          です。
        </p>
        <p>
          「専門外の人がわからない」とか、「私は〇〇の人」って自分で思ってしまうことで自分の活動範囲に枷をかけたくないとか、これには色々理由があります。
        </p>
        <p>でも全く話さないわけじゃなくて、話したいなって思ったことは上げるかもしれないです。</p>
      </section>

      <section ref={refs.aboutCatchphrase.ref}>
        <h1>{refs.aboutCatchphrase.name}</h1>
        <p>RineaRで活動していく上での、その方針を表したキャッチフレーズとか、スローガンみたいなやつです。</p>
        <p>
          具体的に言うと、私は「〇〇を成し遂げたい！」みたいな目的を持たずに、ただその時その場でやりたいこと、楽しいと思ったことをやりたいんです。
        </p>
        <p>その過程で人々やコンテンツに出会うと思うんですが、それにより私自身がどう変化するかはわかりません。</p>
        <p>
          だから、この活動は言わば<strong>「漂流」</strong>
          みたいなものなんです。「船旅」っていうよりかは「漂流」ですね。船って言えるほど大層な装備を備えてるわけでもないので。
        </p>
        <Space size={1} />
        <p>
          ひとまず、私はここを活動拠点としてもっと自分のやりたいことをします。先が見えない冒険感があって良いんですよね。形から入るタイプとも言いますが。
        </p>
      </section>
    </main>
  );
};

const introduction: TalkContent = {
  genre: "talks",
  id: "introduction",
  index: 1,
  title: "ホームページ、爆誕！",
  thumbnailPath: "/img/test.png",
  updatedAt: dayjs("2021-09-01"),
  description: "RineaRでの最初のTALK。",
  Page
};

export default introduction;
