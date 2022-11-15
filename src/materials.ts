import dayjs from "dayjs";
import { Material } from "./index";
import rinearRaftPic from "public/contents/materials/rinear-raft/top.webp";
import lockedPic from "public/general/thumbnail-locked.webp";

export const materials: { [id: string]: Material } = {
  "maze-escape": {
    title: "迷宮脱出",
    image: require("public/contents/materials/maze-escape/stage1.webp"),
    updatedAt: dayjs("2022-11-13 21:00:00").toDate(),
    releasedAt: dayjs("2016-10-18").toDate(),
    description: "上下左右にプレイヤーを移動し、制限時間以内にゴールを目指す2Dアクション脱出ゲーム。"
  },
  "busters-mission": {
    title: "Busters Mission",
    image: require("public/contents/materials/busters-mission/stage3-2.webp"),
    updatedAt: dayjs("2022-11-13 21:00:00").toDate(),
    releasedAt: dayjs("2018-09-05").toDate(),
    description: "敵の攻撃を避けながら、ステージ内にいるすべての敵を倒していく2Dアクションバトルゲーム。"
  },
  "popcorn-chef": {
    title: "Pon! Bon! Rush",
    image: require("public/contents/materials/popcorn-chef/game1.webp"),
    updatedAt: dayjs("2022-11-13 21:00:00").toDate(),
    releasedAt: dayjs("2020-04-05").toDate(),
    description: "2人のプレイヤーがリアルタイムでポップコーンを調理し、食べた量で競うカジュアルゲーム。"
  },
  "mage-simulator": {
    title: "メイジ・シミュレータ",
    image: require("public/contents/materials/mage-simulator/title.webp"),
    updatedAt: dayjs("2022-11-13 21:00:00").toDate(),
    releasedAt: dayjs("2021-02-25").toDate(),
    description: "モーションセンサとマイクを使って、魔法を詠唱し発動できるアプリケーション。"
  },
  marvelous: {
    title: "エライさんbot",
    image: require("public/contents/materials/marvelous/page1.webp"),
    updatedAt: dayjs("2022-11-13 21:00:00").toDate(),
    releasedAt: dayjs("2021-04-30").toDate(),
    description: "みんなの「えらい！」をカウントしてくれるdiscord Bot。"
  },
  kimifeel: {
    title: "キミフィール",
    image: require("public/contents/materials/kimifeel/page1.webp"),
    updatedAt: dayjs("2022-11-13 21:00:00").toDate(),
    releasedAt: dayjs("2022-02-16").toDate(),
    description: "周りの人々に自分のプロフィールを書いてもらえるサービス。"
  },
  eyes: {
    title: "み　て　る　よ",
    image: require("public/contents/materials/eyes/eyes.webp"),
    updatedAt: dayjs("2022-11-13 21:00:00").toDate(),
    releasedAt: dayjs("2022-02-25").toDate(),
    description: "チャットでの『入力中...』が長時間続いていると、『👁👁』を送ってくるdiscord bot。"
  },
  "rinear-raft": {
    title: "RineaRの筏 - chap.1",
    image: rinearRaftPic,
    updatedAt: dayjs("2022-11-13 21:00:00").toDate(),
    releasedAt: dayjs("2022-07-03").toDate(),
    description: "RineaRに関することを公開するホームページ。"
  },
  "glass-moze": {
    title: "グラスモーズ",
    image: require("public/contents/materials/glass-moze/play1.jpg"),
    updatedAt: dayjs("2022-11-13 21:00:00").toDate(),
    releasedAt: dayjs("2022-09-13").toDate(),
    description:
      "いろんな「グラス」で敵の弾を吸引してエネルギーを溜め、攻撃や強化をしてモンスターを殲滅する2Dアクションバトルゲーム。"
  },
  "beat-a-bit": {
    title: "【WIP】Beat a bit",
    image: require("public/contents/materials/beat-a-bit/wip1.jpg"),
    updatedAt: dayjs("2022-11-13 21:00:00").toDate(),
    releasedAt: undefined,
    description:
      "「何秒後にどの能力を使いたいか」を決めた後、キャラクターを操作してゴールを目指す『謎解き』×『リズム』×『アクション』ゲーム。"
  },
  "rinear-raft-v2": {
    title: "RineaRの筏 - chap.2",
    image: rinearRaftPic,
    updatedAt: dayjs("2022-11-13 21:00:00").toDate(),
    releasedAt: dayjs("2022-11-14").toDate(),
    description:
      "RineaRに関することを公開するホームページ。以前と比べて解釈が進み、RineaRの設定が変更された。また、デザインも大きく変更されており、全体的に明るくなっている。"
  },
  "made-highlow": {
    title: "【WIP】メイドハイロウ",
    image: lockedPic,
    updatedAt: dayjs("2022-11-13 21:00:00").toDate(),
    releasedAt: undefined,
    description:
      "キャラクターを「大切に育てて立派になるのを目指す」か、「切り札とする代わりに犠牲にする」かの選択を迫られる、対戦型シミュレーションRPG。"
  }
};
