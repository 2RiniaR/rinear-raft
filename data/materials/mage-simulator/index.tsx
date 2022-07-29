import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import { Chapter, ContentPage } from "models/content";
import { MaterialSettings } from "repositories";
import titlePic from "public/contents/materials/mage-simulator/title.webp";
import appPic from "public/contents/materials/mage-simulator/app.png";
import setup1Pic from "public/contents/materials/mage-simulator/setup1.webp";
import setup2Pic from "public/contents/materials/mage-simulator/setup2.jpg";
import setup3Pic from "public/contents/materials/mage-simulator/setup3.jpg";
import neutralPic from "public/contents/materials/mage-simulator/neutral.jpg";
import readyPic from "public/contents/materials/mage-simulator/ready.webp";
import passedPic from "public/contents/materials/mage-simulator/passed.jpg";
import activatePic from "public/contents/materials/mage-simulator/activate.webp";
import idea1Pic from "public/contents/materials/mage-simulator/idea1.jpg";
import idea2Pic from "public/contents/materials/mage-simulator/idea2.jpg";
import wiimotePic from "public/contents/materials/mage-simulator/wiimote.jpg";
import architecturePic from "public/contents/materials/mage-simulator/architecture.jpg";
import environmentPic from "public/contents/materials/mage-simulator/environment.jpg";
import voiceRecognitionPic from "public/contents/materials/mage-simulator/voice-recognition.jpg";
import motionRecognitionPic from "public/contents/materials/mage-simulator/motion-recognition.jpg";
import grammarPic from "public/contents/materials/mage-simulator/grammar.jpg";
import dummyPic from "public/contents/materials/mage-simulator/dummy.jpg";
import correctPic from "public/contents/materials/mage-simulator/correct.jpg";
import syncPic from "public/contents/materials/mage-simulator/sync.jpg";
import wrongPic from "public/contents/materials/mage-simulator/wrong.jpg";
import fix1Pic from "public/contents/materials/mage-simulator/fix-error-1.jpg";
import fix2Pic from "public/contents/materials/mage-simulator/fix-error-2.jpg";
import {
  ChapterPoint,
  ContentImage,
  Description,
  DescriptionList,
  ExternalLink,
  Heading,
  ListItem,
  OrderedList,
  Paragraph,
  Space,
  Strong,
  TextEffect,
  UnorderedList,
  Video
} from "writers";

const Page: ContentPage = ({ setChapters }) => {
  const refs: { [name: string]: Chapter } = {
    video: { name: "紹介動画", ref: useRef(null) },
    function: { name: "使い方", ref: useRef(null) },
    about: { name: "この作品について", ref: useRef(null) },
    implement: { name: "どのように作られているか", ref: useRef(null) },
    last: { name: "最後に", ref: useRef(null) }
  };

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <>
      <ChapterPoint title={refs.video.name} jumpRef={refs.video.ref}>
        <Video src="https://www.youtube.com/embed/gBHHT_64NUg" />
      </ChapterPoint>

      <ChapterPoint title={refs.function.name} jumpRef={refs.function.ref}>
        <Paragraph>
          今回は、<Strong>「呪文を唱えて杖を振ることで、ゲーム内で魔法が発動できる」</Strong>
          みたいな機能を実現しました。
          Wiiリモコンを杖に見立てて、特定のモーションをしながらマイクに向かって呪文を放つと、ゲーム内で魔法が発動します。
        </Paragraph>

        <Heading level="sub">使用の流れ</Heading>
        <Heading level="detail">セットアップ</Heading>
        <ContentImage src={setup1Pic} alt="マイクのセットアップ" />
        <Paragraph>
          まずはタイトル画面から進むと、<Strong>マイクのセットアップ</Strong>となります。
          ここで、使用するマイクを選択し、音声の入力感度も調整できます。
        </Paragraph>
        <Space size={1} />

        <ContentImage src={setup2Pic} alt="Wiiリモコンのセットアップ" />
        <Paragraph>
          次に、<Strong>Wiiリモコンをセットアップ</Strong>します。
          4回ほど指定の向きでWiiリモコンを静止させ、内部に搭載されているジャイロセンサを校正していきます。
        </Paragraph>
        <Space size={1} />

        <ContentImage src={setup3Pic} alt="音声認識の確認" />
        <Paragraph>
          次に、<Strong>音声認識が正常に行われるかどうかをテスト</Strong>します。
          WiiリモコンのAボタンを押しながら、画面に表示された文章を話すことで、正しく認識されることを確認します。
          この工程が完了すると、実際に魔法を詠唱する画面に移行します。
        </Paragraph>
        <Space size={1} />

        <Heading level="detail">魔法の詠唱</Heading>
        <ContentImage src={neutralPic} alt="初期状態" />
        <Paragraph>
          この画面が、魔法を詠唱するシーンの初期状態です。 画面内にある杖はWiiリモコンの向きと連動しています。
          <Strong>杖を特定の向きに向けると赤・青・紫などの色に光り、この状態でAボタンを押す</Strong>
          と魔法陣が展開されます。
        </Paragraph>
        <UnorderedList>
          <ListItem>
            杖を自分から見て左方向に向け、Aボタンのある面が手前に来るようにする（振り払うような動作） →
            <TextEffect bold>「ファイアブラスト」</TextEffect>
          </ListItem>
          <ListItem>
            杖を自分から見て正面方向に向け、Aボタンのある面が上に来るようにする（溜めるような動作） →
            <TextEffect bold>「レーザービーム」</TextEffect>
          </ListItem>
          <ListItem>
            杖を自分から見て上方向に向け、Aボタンのある面が後ろに来るようにする（高く掲げるような動作） →
            <TextEffect bold>「メテオレイン」</TextEffect>
          </ListItem>
        </UnorderedList>
        <Space size={1} />

        <ContentImage src={readyPic} alt="魔法陣が展開された状態" />
        <Paragraph>
          これが魔法陣が展開された状態です。この状態で、<Strong>表示された呪文をマイクに向かって話す</Strong>
          と、呪文の文字が点滅します。
        </Paragraph>
        <Space size={1} />

        <ContentImage src={passedPic} alt="詠唱が成功した状態" />
        <Paragraph>
          呪文の詠唱に成功すると魔法陣が輝き、魔法が発動可能な状態になります。この状態で
          <Strong>特定のモーションを行う</Strong>と、魔法を発動することができます。
        </Paragraph>
        <UnorderedList>
          <ListItem>「ファイアブラスト」 → 杖を前方向に振る</ListItem>
          <ListItem>「レーザービーム」 → 杖を前方向に突き出す</ListItem>
          <ListItem>「メテオレイン」 → 杖を下方向に振り下ろす</ListItem>
        </UnorderedList>
        <Paragraph>
          呪文の詠唱時に、表示されたものとは違う文章を読み上げた場合など、正しく認識が出来なかった場合はこの状態にならず、再び音声の入力を受け付けます。
        </Paragraph>
        <Space size={1} />

        <ContentImage src={activatePic} alt="魔法の発動" />
        <Paragraph>
          <Strong>発動に成功すると、画面内でエフェクトが再生されます。</Strong>
          その後、初期状態に戻り再び魔法の詠唱を受け付けます。
        </Paragraph>
        <Space size={1} />
      </ChapterPoint>

      <ChapterPoint title={refs.about.name} jumpRef={refs.about.ref}>
        <Heading level="sub">始まり</Heading>
        <Paragraph>
          この「メイジ・シミュレータ」のアイデアが浮かんできたのは、<TextEffect bold>2019年末</TextEffect>でした。
          その頃にしばらくずっと、<Strong>「ゲーム内でリアルに魔法を詠唱したいな...」</Strong>
          っていうことをぼんやり思っていました。
        </Paragraph>

        <ContentImage src={idea2Pic} alt="原案2" />
        <Paragraph>
          そして、ちょうどその頃に自由に研究ができる機会があったため、
          <Strong>「モーションとか唱え方によって、魔法の強さが変わったりしたら面白いな！」</Strong>
          と思って、魔法詠唱のための音声解析を研究しようとしました。
        </Paragraph>

        <ContentImage src={idea1Pic} alt="原案1" />
        <Paragraph>
          そうして自前データを収集したり、デモンストレーションをするために作られたのがこの「メイジ・シミュレータ」の始まりです。
          本来は、このアプリケーションを使って
          <Strong>みんなの「本気の詠唱」と「棒読み」の音声データを収集し、その違いを解析してゲームに組み込む</Strong>
          つもりでした。
        </Paragraph>
        <Space size={1} />

        <ContentImage src={appPic} alt="全体像" />
        <Paragraph>
          作品を展示する機会もありますし、大きなスクリーンを使って、
          <Strong>「杖を振って魔法を唱え、迫りくる敵を撃ち落とす3Dシューティングゲーム！！」</Strong>
          って宣伝で展示したら、盛り上がりそうと思いませんか？
        </Paragraph>
        <Paragraph>
          「唱えるのが恥ずかしい！」って問題も、窓が割れるくらい大音量のBGMと、一緒に呪文を唱えてくれるナビゲーション音声があれば大丈夫だと思います。
          制作チームを集めて、研究の成果を使ったゲームを作る。最高じゃないですか！
        </Paragraph>
        <Space size={1} />

        <Heading level="sub">実際に起きたこと</Heading>
        <Paragraph>
          そう思った矢先、流行りの病やその他様々な不運が重なって、研究がまともに出来ない状態になりました。 そこで、
          <Strong>「音声認識とモーション認識だけを残して、せめてゲーム作品にしよう」</Strong>
          と思ったわけです。ですが、そこでまた壁にぶつかります。
        </Paragraph>
        <Space size={1} />

        <ContentImage src={wiimotePic} alt="Wiiリモコンで唱えている様子" />
        <Paragraph>
          今回、「なぜWiiリモコン？」と思った方もいるでしょう。理由は簡単で、「それしかなかったから」です。
          本当はNintendo SwitchのJoy-Conが欲しかったのですが、あれって結構高いんですよね。8000円くらいします。
        </Paragraph>
        <Paragraph>
          そこで、手元にあるWiiリモコンプラスとヌンチャクでどうにか作ろうとしたわけです。
          <Strong>Wiiリモコン側が杖の役割をして、ヌンチャクのスティックで照準を操作したりガードなどをする。</Strong>
          そうすることに決めて順調に制作を続け、現在のアプリケーションの段階、つまりマイクとWiiリモコンで魔法を発動できるところまで完成しました。
        </Paragraph>
        <Space size={3} />
        <Paragraph>
          ......しかし、ここまで来て気付いてしまったんですよね。
          <Strong>Wiiリモコンプラスの機能とヌンチャクが同時に使えないことに。</Strong>
        </Paragraph>
        <Paragraph>
          どうやらWiiリモコンとの接続に使用しているライブラリ側がそういう仕様らしいです。自分でその部分だけ実装しようかとも思いましたが、締切が迫る中、コストの高い作業を行うにはリスクが伴うため
          <Strong>断念しました。</Strong>
          締切が過ぎた後も、色々求められたため当プロジェクトについて考えることに疲れてしまい、制作は中断されました。
        </Paragraph>
        <Space size={1} />

        <Heading level="sub">魔法使いにはなれなかった</Heading>
        <ContentImage src={titlePic} alt="タイトル画面" />
        <Paragraph>
          というところで、現在手元には「Wiiリモコンとマイクで魔法が唱えられるアプリ」だけが残っています。
          <Strong>それでもまだ諦めてはいません。</Strong>
          将来、Nintendo Switchまたはそれに類するモーションセンサを購入して、魔法を唱えられるゲームを作って、
          <Strong>みんなが盛り上がってるところを見たいのです。</Strong>
        </Paragraph>
        <Space size={1} />
        <Paragraph>
          今回私は魔法使いにはなれませんでしたが、またいつか、今度はみんなを魔法使いにしたいと思います！
        </Paragraph>
      </ChapterPoint>

      <ChapterPoint title={refs.implement.name} jumpRef={refs.implement.ref}>
        <Paragraph>あまりITに詳しくないよって方も、雰囲気でなんとなく分かるような解説をします。</Paragraph>

        <Heading level="sub">全体</Heading>
        <ContentImage src={environmentPic} alt="環境" />
        <Paragraph>
          今回のアプリケーションはゲームエンジンの<ExternalLink href="https://unity.com/ja">Unity</ExternalLink>
          をベースに、音声認識ソフトウェアとして
          <ExternalLink href="https://julius.osdn.jp/">Julius</ExternalLink>、Wiiリモコンとの通信のために
          <ExternalLink href="https://github.com/Flafla2/Unity-Wiimote">Unity-Wiimote</ExternalLink>を使用しました。
        </Paragraph>
        <Paragraph>
          なんとなく気付くかもしれませんが、
          <Strong>画像は外部で発表したものを丁重に使いまわさせていただいてます。</Strong>
          それよりも、どうですか？素敵で見やすいデザインじゃないですかね。徹夜の脳から生まれたクオリティとは今の自分でもとても思えないです。
        </Paragraph>
        <Paragraph>
          それと、今更ですが英語が変だったらごめんなさい、徹夜だったもので。
          ちなみに現在は徹夜をすることは無くなりました。健康でおめでたいですね。
        </Paragraph>
        <Space size={1} />

        <ContentImage src={architecturePic} alt="構造" />
        <Paragraph>
          これがアプリケーション全体の構造です。そんなにわからなくていいです。ざっくり言うと、ゲームがマイクやらWiiリモコンやらと通信をしています。
        </Paragraph>
        <Paragraph>
          この中で、「音声認識」「Wiiリモコンと杖の連動」で色々<Strong>試行錯誤</Strong>
          をしたので、それぞれ紹介したいと思います。
        </Paragraph>
        <Space size={1} />

        <Heading level="sub">音声認識</Heading>
        <ContentImage src={voiceRecognitionPic} alt="音声認識" />
        <Paragraph>音声認識の流れは、こんな感じです。</Paragraph>
        <OrderedList>
          <ListItem>
            「この呪文を認識してくれ！」と指定するためのファイを、<Strong>予め用意</Strong>しておく。
          </ListItem>
          <ListItem>
            起動と同時に、音声認識ソフト（Julius）を自動で起動し、<Strong>通信を開始</Strong>する。
          </ListItem>
          <ListItem>
            詠唱のタイミングで、「この呪文を認識してくれ！」「認識を開始してくれ！」 という<Strong>信号を送る</Strong>。
          </ListItem>
          <ListItem>
            呪文をマイクに唱えると、音声認識ソフトが「正しい文章が認識できたか」を<Strong>判定</Strong>する。
          </ListItem>
          <ListItem>
            リアルタイムでJuliusから結果が返ってくるため、その
            <Strong>中身を解析</Strong>して呪文詠唱の成功・失敗を判定する。
          </ListItem>
        </OrderedList>
        <Space size={1} />

        <Paragraph>ここからちょっと詳しく解説します。</Paragraph>

        <Paragraph>
          Juliusでの音声認識には、<Strong>「認識したい単語が書かれたファイル」</Strong>
          をあらかじめ用意する必要があります。 その中身はこんな感じです。
        </Paragraph>
        <ContentImage src={grammarPic} alt="音声認識に必要なファイル" />
        <Paragraph>
          そのため、「ファイアブラスト」のような呪文それぞれに対して、これらのファイルを
          <Strong>自動生成するプログラム</Strong>を書きました。
        </Paragraph>

        <Paragraph>
          また、<Strong>「全ての五十音が書かれたファイル」</Strong>
          も別に用意します。これは常時、優先度最下位の認識対象にしておきます。
        </Paragraph>
        <ContentImage src={dummyPic} alt="音声認識に必要なファイル" />
        <Paragraph>
          なぜかと言うと、例えば「ファイアブラスト」という文章を認識したいとします。このとき、
          音声認識したい単語として「ファイアブラスト」だけを設定してしまうと、
          <Strong>何を喋っても「ファイアブラスト」と認識されてしまいます。</Strong>
          これでは困りますよね。
        </Paragraph>
        <Paragraph>そのため、ダミーとして他の五十音をすべて、優先度を下げて認識対象に設定してるわけです。</Paragraph>

        <Space size={2} />

        <Paragraph>
          次に、Juliusの認識結果を他のアプリケーションで利用するには、自分のアプリケーションとJuliusの間で通信を行い、そのうえで
          <Strong>メッセージを送り合う</Strong>必要があります。
        </Paragraph>
        <Paragraph>
          例えば、「これは音声認識のテストです」という文章を認識したいとき、音声認識の結果は次のような形式で受け取ることができます。
        </Paragraph>
        <ContentImage src={correctPic} alt="正しい文章を発音したとき" />
        <Paragraph>
          成功パターンにはしっかりと<Strong>「これは音声認識のテストです」の文字列があります。</Strong>
        </Paragraph>
        <ContentImage src={wrongPic} alt="誤った文章を発音したとき" />
        <Paragraph>
          それに対し、失敗パターンでは先ほど設定した<Strong>ダミーの五十音が並んでいます。</Strong>
          これによって「正しい文章が発音されたか」を判定すればいいわけです。
        </Paragraph>
        <Paragraph>
          まとめると、「メイジ・シミュレータ」の音声認識部分では
          <UnorderedList>
            <ListItem>音声認識に必要なファイルを生成する機能</ListItem>
            <ListItem>通信を開始し、その接続を維持する機能</ListItem>
            <ListItem>認識する単語の切り替え、認識の開始などの指示を送る機能</ListItem>
            <ListItem>送られてきた判定結果が成功・失敗のどちらなのかを判別する機能</ListItem>
          </UnorderedList>
          を実装しました。
        </Paragraph>
        <Space size={2} />

        <Heading level="sub">Wiiリモコンと杖の連動</Heading>
        <ContentImage src={motionRecognitionPic} alt="モーション認識" />
        <Paragraph>
          実はWiiリモコンって<Strong>BluetoothでPCと接続が可能</Strong>なので、今回はこれを使ってPCと接続しました。
        </Paragraph>
        <Space size={1} />

        <Paragraph>
          Wiiリモコンから受け取れる信号は、大まかに分けて
          <UnorderedList>
            <ListItem>
              <Strong>各ボタン</Strong>が押されているかどうか
            </ListItem>
            <ListItem>
              <Strong>重力</Strong>がどの方向を向いているか、どの方向に振ったか（厳密には、三軸加速度センサの値）
            </ListItem>
            <ListItem>
              <Strong>角度</Strong>がどのくらいの速さで変化しているか（厳密には、ジャイロセンサの値）
            </ListItem>
          </UnorderedList>
          の3つです。これらを使って、あたかも杖を持っているかのようにWiiリモコンの動きをリンクします。
        </Paragraph>
        <Space size={1} />
        <ContentImage src={syncPic} alt="杖を降っているかのようにする" />

        <Paragraph>
          手始めに、「角度がどのくらいの速さで変化しているか」を受け取って、毎フレーム足していけば行けそう！と思いました。
        </Paragraph>
        <Space size={3} />
        <Paragraph>
          <Strong>......とんでもないブレ。</Strong>Wiiリモコンを静止させてても、勝手にあさっての方向を向いていきます。
        </Paragraph>
        <Paragraph>
          それはそうで、当然センサには誤差があります。
          <Strong>誤差が蓄積</Strong>されて、勝手に杖が動いていってしまう、というのが原因でした。
        </Paragraph>
        <Space size={1} />

        <Paragraph>
          そこでどうしたかというと、<Strong>「重力がどの方向を向いているか」</Strong>を利用して誤差を補正しよう！
          となりました。
        </Paragraph>
        <ContentImage src={fix1Pic} alt="モーション認識" />
        <ContentImage src={fix2Pic} alt="モーション認識" />
        <Paragraph>
          この時に「実際の重力の向き」から「ゲーム内の杖との誤差」を計算するのがまあ難しくて、
          うんうん唸りながらメモ帳に計算式を書いてました。 ちょっと難しいことを言うと、行列計算というやつです。
          <Strong>頭オーバーヒートするかと思った。</Strong>
        </Paragraph>
        <DescriptionList>
          <Description name={"最初から「重力がどの方向を向いているか」だけ使うんじゃダメなの？"}>
            <Paragraph>
              Aボタンのある面を上にして、Wiiリモコンをディスプレイ側に向けたとき、重力はBボタン側の方向に向いていますね。
            </Paragraph>
            <Paragraph>
              それでは、Aボタンのある面を上にしたまま、くるっと180度回転させてWiiリモコンを自分の方に向けてみましょう。重力はどの方向に向いていますか？
            </Paragraph>
          </Description>
        </DescriptionList>
        <Space size={1} />

        <Paragraph>
          悩んでたことも最終的には解決して、実際にこの方法で誤差を補正してみました。 すると、ちゃんと
          <Strong>Wiiリモコンと杖の動きがリンクする！素晴らしい！</Strong>
        </Paragraph>
        <Paragraph>
          こうして、無事にWiiリモコンを杖として扱う準備ができたわけです。
          あとは、杖の向きやボタンの入力状態から、魔法の発動が成功したか否かを判定するだけなので、制作はスムーズでした。
        </Paragraph>
      </ChapterPoint>

      <ChapterPoint title={refs.last.name} jumpRef={refs.last.ref}>
        <Paragraph>ここまで読んでいただき、ありがとうございました！</Paragraph>
        <Paragraph>
          『メイジ・シミュレータ』は現在公開していませんが、文章中でも触れた通り、いつかゲームとして昇華することがあるかもしれません。
          そのときは、「あっあの時の！」となってくれると嬉しいです！
        </Paragraph>
        <Paragraph>みなさんもよき魔法使いになれますように！</Paragraph>
      </ChapterPoint>
    </>
  );
};

const mageSimulator: MaterialSettings = {
  genre: "material",
  id: "mage-simulator",
  title: "メイジ・シミュレータ",
  thumbnail: titlePic,
  thumbnails: [titlePic, setup1Pic, readyPic, activatePic],
  updatedAt: dayjs("2022-07-29 12:50:00").toDate(),
  releasedAt: dayjs("2021-02-25").toDate(),
  description: "モーションセンサとマイクを使って、魔法を詠唱し発動できるアプリケーション。",
  Page
};

export default mageSimulator;
