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
import {
  ChapterPoint,
  ContentImage,
  ExternalLink,
  Heading,
  ListItem,
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
    implement: { name: "どのように作られているか", ref: useRef(null) }
  };

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <>
      <ChapterPoint title={refs.video.name} jumpRef={refs.video.ref}>
        <Video src="https://www.youtube.com/embed/gBHHT_64NUg" />
      </ChapterPoint>

      <ChapterPoint title={refs.function.name} jumpRef={refs.function.ref}>
        <Paragraph>
          このシステムでは、<Strong>「呪文を唱えて杖を振ることで、ゲーム内で魔法が発動できる」</Strong>
          みたいな機能を実現しました。
          Wiiリモコンを杖に見立てて、特定のモーションをしながらマイクに向かって呪文を放つと、ゲーム内で魔法が発動します。
        </Paragraph>

        <Heading level="sub">使用の流れ</Heading>
        <Heading level="detail">セットアップ</Heading>
        <ContentImage src={setup1Pic} alt="マイクのセットアップ" />
        <Paragraph>
          まずはタイトル画面から進むと、マイクのセットアップとなります。
          ここで、使用するマイクを選択し、音声の入力感度も調整できます。
        </Paragraph>
        <Space size={1} />

        <ContentImage src={setup2Pic} alt="Wiiリモコンのセットアップ" />
        <Paragraph>
          次に、Wiiリモコンをセットアップします。
          4回ほど指定の向きでWiiリモコンを静止させ、内部に搭載されているジャイロセンサを校正していきます。
        </Paragraph>
        <Space size={1} />

        <ContentImage src={setup3Pic} alt="音声認識の確認" />
        <Paragraph>
          次に、音声認識が正常に行われるかどうかをテストします。
          ここでは、WiiリモコンのAボタンを押しながら画面に表示された文章を話すことで、正しく認識されることを確認します。
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
        <Heading level="sub">全体</Heading>
        <ContentImage src={environmentPic} alt="環境" />
        <Paragraph>
          今回のアプリケーションは<ExternalLink href="https://unity.com/ja">Unity</ExternalLink>をベースに、音声認識に
          <ExternalLink href="https://julius.osdn.jp/">Julius</ExternalLink>、Wiiリモコンとの通信に
          <ExternalLink href="https://github.com/Flafla2/Unity-Wiimote">Unity-Wiimote</ExternalLink>を使用しました。
        </Paragraph>
        <Paragraph>
          なんとなく気付くかもしれませんが、画像は外部で発表したものを丁重に使いまわさせていただいてます。
          それよりも、どうですか？素敵で見やすいデザインじゃないですかね。徹夜の脳から生まれたクオリティとは今の自分でもとても思えないです。
        </Paragraph>
        <Space size={1} />

        <ContentImage src={architecturePic} alt="構造" />
        <Paragraph>
          これがアプリケーション全体の構造です。ゲームが外部のデバイスやソフトウェアと通信をしています。
          この中で、「音声認識」「Wiiリモコンと杖の連動」「セットアップ画面の表示」で色々試行錯誤をしたので、それぞれ紹介したいと思います。
        </Paragraph>
        <Space size={1} />

        <Heading level="sub">音声認識</Heading>
        <ContentImage src={voiceRecognitionPic} alt="音声認識" />
        <Paragraph>音声認識はこんな感じで行われています。</Paragraph>
        <Space size={1} />

        <Heading level="sub">モーション認識</Heading>
        <ContentImage src={motionRecognitionPic} alt="モーション認識" />
        <Paragraph>
          これがアプリケーション全体の構造です。ゲームが外部のデバイスやソフトウェアと通信をしています。その他特筆する点はありません。
        </Paragraph>
        <Space size={1} />
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
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  releasedAt: dayjs("2021-02-25").toDate(),
  description: "モーションセンサとマイクを使って、魔法を詠唱し発動できるアプリケーション。",
  Page
};

export default mageSimulator;
