import dayjs from "dayjs";
import { ExternalLink, Image } from "functions";
import { MaterialTemplate } from "templates";
import { Material } from "content";
import titlePic from "public/contents/materials/mage-simulator/title.webp";
import setup1Pic from "public/contents/materials/mage-simulator/setup1.webp";
import readyPic from "public/contents/materials/mage-simulator/ready.webp";
import activatePic from "public/contents/materials/mage-simulator/activate.webp";
import setup2Pic from "public/contents/materials/mage-simulator/setup2.jpg";
import setup3Pic from "public/contents/materials/mage-simulator/setup3.jpg";
import neutralPic from "public/contents/materials/mage-simulator/neutral.jpg";
import passedPic from "public/contents/materials/mage-simulator/passed.jpg";
import idea2Pic from "public/contents/materials/mage-simulator/idea2.jpg";
import idea1Pic from "public/contents/materials/mage-simulator/idea1.jpg";
import appPic from "public/contents/materials/mage-simulator/app.png";
import wiimotePic from "public/contents/materials/mage-simulator/wiimote.jpg";
import environmentPic from "public/contents/materials/mage-simulator/environment.jpg";
import architecturePic from "public/contents/materials/mage-simulator/architecture.jpg";
import voiceRecognitionPic from "public/contents/materials/mage-simulator/voice-recognition.jpg";
import grammarPic from "public/contents/materials/mage-simulator/grammar.jpg";
import dummyPic from "public/contents/materials/mage-simulator/dummy.jpg";
import correctPic from "public/contents/materials/mage-simulator/correct.jpg";
import wrongPic from "public/contents/materials/mage-simulator/wrong.jpg";
import motionRecognitionPic from "public/contents/materials/mage-simulator/motion-recognition.jpg";
import syncPic from "public/contents/materials/mage-simulator/sync.jpg";
import fix1Pic from "public/contents/materials/mage-simulator/fix-error-1.jpg";
import fix2Pic from "public/contents/materials/mage-simulator/fix-error-2.jpg";

export const content: Material = {
  id: "mage-simulator",
  title: "メイジ・シミュレータ",
  image: titlePic,
  updatedAt: dayjs("2022-07-29 12:50:00").toDate(),
  releasedAt: dayjs("2021-02-25").toDate(),
  description: "モーションセンサとマイクを使って、魔法を詠唱し発動できるアプリケーション。"
};

const Page = () => (
  <MaterialTemplate content={content}>
    <h1>紹介動画</h1>

    <iframe
      src="https://www.youtube.com/embed/gBHHT_64NUg"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />

    <h1>使い方</h1>

    <p>
      今回は、<s>「呪文を唱えて杖を振ることで、ゲーム内で魔法が発動できる」</s>
      みたいな機能を実現しました。
      Wiiリモコンを杖に見立てて、特定のモーションをしながらマイクに向かって呪文を放つと、ゲーム内で魔法が発動します。
    </p>

    <h2>使用の流れ</h2>
    <h3>セットアップ</h3>
    <Image src={setup1Pic} alt="マイクのセットアップ" />
    <p>
      まずはタイトル画面から進むと、<s>マイクのセットアップ</s>となります。
      ここで、使用するマイクを選択し、音声の入力感度も調整できます。
    </p>
    <Image src={setup2Pic} alt="Wiiリモコンのセットアップ" />
    <p>
      次に、<s>Wiiリモコンをセットアップ</s>します。
      4回ほど指定の向きでWiiリモコンを静止させ、内部に搭載されているジャイロセンサを校正していきます。
    </p>
    <Image src={setup3Pic} alt="音声認識の確認" />
    <p>
      次に、<s>音声認識が正常に行われるかどうかをテスト</s>します。
      WiiリモコンのAボタンを押しながら、画面に表示された文章を話すことで、正しく認識されることを確認します。
      この工程が完了すると、実際に魔法を詠唱する画面に移行します。
    </p>
    <h3>魔法の詠唱</h3>
    <Image src={neutralPic} alt="初期状態" />
    <p>
      この画面が、魔法を詠唱するシーンの初期状態です。 画面内にある杖はWiiリモコンの向きと連動しています。
      <s>杖を特定の向きに向けると赤・青・紫などの色に光り、この状態でAボタンを押す</s>
      と魔法陣が展開されます。
    </p>
    <ul>
      <li>
        杖を自分から見て左方向に向け、Aボタンのある面が手前に来るようにする（振り払うような動作） →
        <b>「ファイアブラスト」</b>
      </li>
      <li>
        杖を自分から見て正面方向に向け、Aボタンのある面が上に来るようにする（溜めるような動作） →
        <b>「レーザービーム」</b>
      </li>
      <li>
        杖を自分から見て上方向に向け、Aボタンのある面が後ろに来るようにする（高く掲げるような動作） →
        <b>「メテオレイン」</b>
      </li>
    </ul>
    <Image src={readyPic} alt="魔法陣が展開された状態" />
    <p>
      これが魔法陣が展開された状態です。この状態で、<s>表示された呪文をマイクに向かって話す</s>
      と、呪文の文字が点滅します。
    </p>
    <Image src={passedPic} alt="詠唱が成功した状態" />
    <p>
      呪文の詠唱に成功すると魔法陣が輝き、魔法が発動可能な状態になります。この状態で
      <s>特定のモーションを行う</s>と、魔法を発動することができます。
    </p>
    <ul>
      <li>「ファイアブラスト」 → 杖を前方向に振る</li>
      <li>「レーザービーム」 → 杖を前方向に突き出す</li>
      <li>「メテオレイン」 → 杖を下方向に振り下ろす</li>
    </ul>
    <p>
      呪文の詠唱時に、表示されたものとは違う文章を読み上げた場合など、正しく認識が出来なかった場合はこの状態にならず、再び音声の入力を受け付けます。
    </p>
    <Image src={activatePic} alt="魔法の発動" />
    <p>
      <s>発動に成功すると、画面内でエフェクトが再生されます。</s>
      その後、初期状態に戻り再び魔法の詠唱を受け付けます。
    </p>

    <h1>この作品について</h1>

    <h2>始まり</h2>
    <p>
      この「メイジ・シミュレータ」のアイデアが浮かんできたのは、<b>2019年末</b>でした。 その頃にしばらくずっと、
      <s>「ゲーム内でリアルに魔法を詠唱したいな...」</s>
      っていうことをぼんやり思っていました。
    </p>
    <Image src={idea2Pic} alt="原案2" />
    <p>
      そして、ちょうどその頃に自由に研究ができる機会があったため、
      <s>「モーションとか唱え方によって、魔法の強さが変わったりしたら面白いな！」</s>
      と思って、魔法詠唱のための音声解析を研究しようとしました。
    </p>
    <Image src={idea1Pic} alt="原案1" />
    <p>
      そうして自前データを収集したり、デモンストレーションをするために作られたのがこの「メイジ・シミュレータ」の始まりです。
      本来は、このアプリケーションを使って
      <s>みんなの「本気の詠唱」と「棒読み」の音声データを収集し、その違いを解析してゲームに組み込む</s>
      つもりでした。
    </p>
    <Image src={appPic} alt="全体像" />
    <p>
      作品を展示する機会もありますし、大きなスクリーンを使って、
      <s>「杖を振って魔法を唱え、迫りくる敵を撃ち落とす3Dシューティングゲーム！！」</s>
      って宣伝で展示したら、盛り上がりそうと思いませんか？
    </p>
    <p>
      「唱えるのが恥ずかしい！」って問題も、窓が割れるくらい大音量のBGMと、一緒に呪文を唱えてくれるナビゲーション音声があれば大丈夫だと思います。
      制作チームを集めて、研究の成果を使ったゲームを作る。最高じゃないですか！
    </p>
    <h2>実際に起きたこと</h2>
    <p>
      そう思った矢先、流行りの病やその他様々な不運が重なって、研究がまともに出来ない状態になりました。 そこで、
      <s>「音声認識とモーション認識だけを残して、せめてゲーム作品にしよう」</s>
      と思ったわけです。ですが、そこでまた壁にぶつかります。
    </p>
    <Image src={wiimotePic} alt="Wiiリモコンで唱えている様子" />
    <p>
      今回、「なぜWiiリモコン？」と思った方もいるでしょう。理由は簡単で、「それしかなかったから」です。 本当はNintendo
      SwitchのJoy-Conが欲しかったのですが、あれって結構高いんですよね。8000円くらいします。
    </p>
    <p>
      そこで、手元にあるWiiリモコンプラスとヌンチャクでどうにか作ろうとしたわけです。
      <s>Wiiリモコン側が杖の役割をして、ヌンチャクのスティックで照準を操作したりガードなどをする。</s>
      そうすることに決めて順調に制作を続け、現在のアプリケーションの段階、つまりマイクとWiiリモコンで魔法を発動できるところまで完成しました。
    </p>
    <hr />
    <p>
      ......しかし、ここまで来て気付いてしまったんですよね。
      <s>Wiiリモコンプラスの機能とヌンチャクが同時に使えないことに。</s>
    </p>
    <p>
      どうやらWiiリモコンとの接続に使用しているライブラリ側がそういう仕様らしいです。自分でその部分だけ実装しようかとも思いましたが、締切が迫る中、コストの高い作業を行うにはリスクが伴うため
      <s>断念しました。</s>
      締切が過ぎた後も、色々求められたため当プロジェクトについて考えることに疲れてしまい、制作は中断されました。
    </p>
    <h2>魔法使いにはなれなかった</h2>
    <Image src={titlePic} alt="タイトル画面" />
    <p>
      というところで、現在手元には「Wiiリモコンとマイクで魔法が唱えられるアプリ」だけが残っています。
      <s>それでもまだ諦めてはいません。</s>
      将来、Nintendo Switchまたはそれに類するモーションセンサを購入して、魔法を唱えられるゲームを作って、
      <s>みんなが盛り上がってるところを見たいのです。</s>
    </p>
    <p>今回私は魔法使いにはなれませんでしたが、またいつか、今度はみんなを魔法使いにしたいと思います！</p>

    <h1>どのように作られているか</h1>
    <p>あまりITに詳しくないよって方も、雰囲気でなんとなく分かるような解説をします。</p>

    <h2>全体</h2>
    <Image src={environmentPic} alt="環境" />
    <p>
      今回のアプリケーションはゲームエンジンの<ExternalLink href="https://unity.com/ja">Unity</ExternalLink>
      をベースに、音声認識ソフトウェアとして
      <ExternalLink href="https://julius.osdn.jp/">Julius</ExternalLink>、Wiiリモコンとの通信のために
      <ExternalLink href="https://github.com/Flafla2/Unity-Wiimote">Unity-Wiimote</ExternalLink>を使用しました。
    </p>
    <p>
      なんとなく気付くかもしれませんが、
      <s>画像は外部で発表したものを丁重に使いまわさせていただいてます。</s>
      それよりも、どうですか？素敵で見やすいデザインじゃないですかね。徹夜の脳から生まれたクオリティとは今の自分でもとても思えないです。
    </p>
    <p>
      それと、今更ですが英語が変だったらごめんなさい、徹夜だったもので。
      ちなみに現在は徹夜をすることは無くなりました。健康でおめでたいですね。
    </p>
    <Image src={architecturePic} alt="構造" />
    <p>
      これがアプリケーション全体の構造です。そんなにわからなくていいです。ざっくり言うと、ゲームがマイクやらWiiリモコンやらと通信をしています。
    </p>
    <p>
      この中で、「音声認識」「Wiiリモコンと杖の連動」で色々<s>試行錯誤</s>
      をしたので、それぞれ紹介したいと思います。
    </p>
    <h2>音声認識</h2>
    <Image src={voiceRecognitionPic} alt="音声認識" />
    <p>音声認識の流れは、こんな感じです。</p>
    <ol>
      <li>
        「この呪文を認識してくれ！」と指定するためのファイを、<s>予め用意</s>しておく。
      </li>
      <li>
        起動と同時に、音声認識ソフト（Julius）を自動で起動し、<s>通信を開始</s>する。
      </li>
      <li>
        詠唱のタイミングで、「この呪文を認識してくれ！」「認識を開始してくれ！」 という<s>信号を送る</s>。
      </li>
      <li>
        呪文をマイクに唱えると、音声認識ソフトが「正しい文章が認識できたか」を<s>判定</s>する。
      </li>
      <li>
        リアルタイムでJuliusから結果が返ってくるため、その
        <s>中身を解析</s>して呪文詠唱の成功・失敗を判定する。
      </li>
    </ol>
    <p>ここからちょっと詳しく解説します。</p>

    <p>
      Juliusでの音声認識には、<s>「認識したい単語が書かれたファイル」</s>
      をあらかじめ用意する必要があります。 その中身はこんな感じです。
    </p>
    <Image src={grammarPic} alt="音声認識に必要なファイル" />
    <p>
      そのため、「ファイアブラスト」のような呪文それぞれに対して、これらのファイルを
      <s>自動生成するプログラム</s>を書きました。
    </p>

    <p>
      また、<s>「全ての五十音が書かれたファイル」</s>
      も別に用意します。これは常時、優先度最下位の認識対象にしておきます。
    </p>
    <Image src={dummyPic} alt="音声認識に必要なファイル" />
    <p>
      なぜかと言うと、例えば「ファイアブラスト」という文章を認識したいとします。このとき、
      音声認識したい単語として「ファイアブラスト」だけを設定してしまうと、
      <s>何を喋っても「ファイアブラスト」と認識されてしまいます。</s>
      これでは困りますよね。
    </p>
    <p>そのため、ダミーとして他の五十音をすべて、優先度を下げて認識対象に設定してるわけです。</p>
    <p>
      次に、Juliusの認識結果を他のアプリケーションで利用するには、自分のアプリケーションとJuliusの間で通信を行い、そのうえで
      <s>メッセージを送り合う</s>必要があります。
    </p>
    <p>
      例えば、「これは音声認識のテストです」という文章を認識したいとき、音声認識の結果は次のような形式で受け取ることができます。
    </p>
    <Image src={correctPic} alt="正しい文章を発音したとき" />
    <p>
      成功パターンにはしっかりと<s>「これは音声認識のテストです」の文字列があります。</s>
    </p>
    <Image src={wrongPic} alt="誤った文章を発音したとき" />
    <p>
      それに対し、失敗パターンでは先ほど設定した<s>ダミーの五十音が並んでいます。</s>
      これによって「正しい文章が発音されたか」を判定すればいいわけです。
    </p>
    <p>
      まとめると、「メイジ・シミュレータ」の音声認識部分では
      <ul>
        <li>音声認識に必要なファイルを生成する機能</li>
        <li>通信を開始し、その接続を維持する機能</li>
        <li>認識する単語の切り替え、認識の開始などの指示を送る機能</li>
        <li>送られてきた判定結果が成功・失敗のどちらなのかを判別する機能</li>
      </ul>
      を実装しました。
    </p>
    <h2>Wiiリモコンと杖の連動</h2>
    <Image src={motionRecognitionPic} alt="モーション認識" />
    <p>
      実はWiiリモコンって<s>BluetoothでPCと接続が可能</s>なので、今回はこれを使ってPCと接続しました。
    </p>
    <p>
      Wiiリモコンから受け取れる信号は、大まかに分けて
      <ul>
        <li>
          <s>各ボタン</s>が押されているかどうか
        </li>
        <li>
          <s>重力</s>がどの方向を向いているか、どの方向に振ったか（厳密には、三軸加速度センサの値）
        </li>
        <li>
          <s>角度</s>がどのくらいの速さで変化しているか（厳密には、ジャイロセンサの値）
        </li>
      </ul>
      の3つです。これらを使って、あたかも杖を持っているかのようにWiiリモコンの動きをリンクします。
    </p>
    <Image src={syncPic} alt="杖を降っているかのようにする" />
    <p>
      手始めに、「角度がどのくらいの速さで変化しているか」を受け取って、毎フレーム足していけば行けそう！と思いました。
    </p>
    <p>
      <s>......とんでもないブレ。</s>Wiiリモコンを静止させてても、勝手にあさっての方向を向いていきます。
    </p>
    <p>
      それはそうで、当然センサには誤差があります。
      <s>誤差が蓄積</s>されて、勝手に杖が動いていってしまう、というのが原因でした。
    </p>
    <p>
      そこでどうしたかというと、<s>「重力がどの方向を向いているか」</s>を利用して誤差を補正しよう！ となりました。
    </p>
    <Image src={fix1Pic} alt="モーション認識" />
    <Image src={fix2Pic} alt="モーション認識" />
    <p>
      この時に「実際の重力の向き」から「ゲーム内の杖との誤差」を計算するのがまあ難しくて、
      うんうん唸りながらメモ帳に計算式を書いてました。 ちょっと難しいことを言うと、行列計算というやつです。
      <s>頭オーバーヒートするかと思った。</s>
    </p>
    <dl>
      <dt>最初から「重力がどの方向を向いているか」だけ使うんじゃダメなの？</dt>
      <dd>
        <p>
          Aボタンのある面を上にして、Wiiリモコンをディスプレイ側に向けたとき、重力はBボタン側の方向に向いていますね。
        </p>
        <p>
          それでは、Aボタンのある面を上にしたまま、くるっと180度回転させてWiiリモコンを自分の方に向けてみましょう。重力はどの方向に向いていますか？
        </p>
      </dd>
    </dl>
    <p>
      悩んでたことも最終的には解決して、実際にこの方法で誤差を補正してみました。 すると、ちゃんと
      <s>Wiiリモコンと杖の動きがリンクする！素晴らしい！</s>
    </p>
    <p>
      こうして、無事にWiiリモコンを杖として扱う準備ができたわけです。
      あとは、杖の向きやボタンの入力状態から、魔法の発動が成功したか否かを判定するだけなので、制作はスムーズでした。
    </p>

    <h1>最後に</h1>

    <p>ここまで読んでいただき、ありがとうございました！</p>
    <p>
      『メイジ・シミュレータ』は現在公開していませんが、文章中でも触れた通り、いつかゲームとして昇華することがあるかもしれません。
      そのときは、「あっあの時の！」となってくれると嬉しいです！
    </p>
    <p>みなさんもよき魔法使いになれますように！</p>
  </MaterialTemplate>
);

export default Page;
