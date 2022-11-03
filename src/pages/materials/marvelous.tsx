import dayjs from "dayjs";
import Image from "next/image";
import React from "react";
import { MaterialTemplate } from "templates";
import { Material } from "content";
import thumbnailPic1 from "public/contents/materials/marvelous/page1.webp";
import exprPic from "public/contents/materials/marvelous/page2.webp";
import tutorialPic from "public/contents/materials/marvelous/tutorial1.webp";
import tutorialPic2 from "public/contents/materials/marvelous/tutorial2.webp";
import tutorialPic3 from "public/contents/materials/marvelous/tutorial3.webp";
import tutorialPic4 from "public/contents/materials/marvelous/tutorial4.webp";
import tutorialPic5 from "public/contents/materials/marvelous/tutorial5.webp";
import tutorialPic6 from "public/contents/materials/marvelous/tutorial6.webp";
import tutorialPic7 from "public/contents/materials/marvelous/tutorial7.webp";
import tutorialPic8 from "public/contents/materials/marvelous/tutorial8.webp";

export const content: Material = {
  id: "marvelous",
  title: "エライさんbot",
  image: thumbnailPic1,
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  releasedAt: dayjs("2021-04-30").toDate(),
  description: "みんなの「えらい！」をカウントしてくれるDiscord Bot。"
};

const Page = () => (
  <MaterialTemplate content={content}>
    <h1>利用方法</h1>
    <p>「エライさんbot」の稼働は終了いたしました。ご利用いただきありがとうございました。</p>

    <h1>えらいポイント</h1>
    <Image src={exprPic} alt="えらいポイント" />
    <Image src={tutorialPic} alt="チュートリアル1" />
    <p>
      えらいポイントとは、あなたの行動の「えらさ」を表すポイントです。毎週月曜4:00にリセットされ、それまでの1週間でのランキングが発表されます。
    </p>

    <h1>人を褒める</h1>
    <Image src={tutorialPic2} alt="チュートリアル2" />
    <p>
      他ユーザーのメッセージに
      <span role="img" aria-label="拍手">
        👏
      </span>
      のリアクションを付けることで、相手を褒めることができます。褒めた相手にはえらいポイントが付与されます。
    </p>
    <Image src={tutorialPic3} alt="チュートリアル3" />
    <p>
      他ユーザーのメッセージに
      <span role="img" aria-label="万歳">
        🙌
      </span>
      のリアクションを付けることで、相手に特殊な褒めるアクションを送ることができます。褒めた相手にはえらいポイントが多く付与されます。
      ただし、一週間当たりの使用回数には制限があります。
    </p>
    <Image src={tutorialPic4} alt="チュートリアル4" />
    <p>
      他ユーザーのメッセージに
      <span role="img" aria-label="排泄物">
        💩
      </span>
      のリアクションを付けることで、相手を咎めることができます。褒めた相手のえらいポイントが減少します。
    </p>
    <h1>えらいことを評価する</h1>
    <Image src={tutorialPic5} alt="チュートリアル5" />
    <p>毎日、最初のメッセージを送信したときにえらいポイントが付与されます。</p>
    <Image src={tutorialPic6} alt="チュートリアル6" />
    <p>
      他ユーザーを一定回数褒めると自分にもえらいポイントのボーナスが貰えます。反対に、他ユーザーを一定回数咎めると自分にもえらいポイントのペナルティが与えられます。
    </p>
    <Image src={tutorialPic7} alt="チュートリアル7" />
    <p>
      当botには、ユーザーにGitHubのアカウントを紐づけることが可能です。紐づけた状態で、一日に1回以上Contributeを行うとえらいポイントのボーナスが貰えます。
    </p>
    <Image src={tutorialPic8} alt="チュートリアル8" />
    <p>
      夜中1時より前に「おやすみ」と送信し、昼12時より前に次のメッセージを送信することでえらいポイントのボーナスが貰えます。ただし、夜中1時～5時の間にメッセージを送信したことが検知された場合は、ボーナスが貰えません。
    </p>

    <h1>使用ツール</h1>
    <h2>言語・ライブラリ等</h2>
    <ul>
      <li>Python 3.8</li>
      <li>discord.py</li>
      <li>Heroku</li>
    </ul>
  </MaterialTemplate>
);

export default Page;
