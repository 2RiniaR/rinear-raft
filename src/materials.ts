import dayjs from "dayjs";
import { Material } from "./index";
import lockedPic from "public/general/thumbnail-locked.webp";

export const materials: { [id: string]: Material } = {
  "maze-escape": {
    title: "1. 迷宮脱出",
    type: "important",
    dirname: "M001_maze-escape",
    image: require("public/contents/materials/M001_maze-escape/stage1.webp"),
    updatedAt: dayjs("2022-11-27 21:00:00").toDate(),
    releasedAt: dayjs("2016-10-18").toDate(),
    description: "上下左右にプレイヤーを移動し、制限時間以内にゴールを目指す2Dアクション脱出ゲーム。"
  },
  "busters-mission": {
    title: "2. Busters Mission",
    dirname: "M002_busters-mission",
    image: require("public/contents/materials/M002_busters-mission/stage3-2.webp"),
    updatedAt: dayjs("2022-11-27 21:00:00").toDate(),
    releasedAt: dayjs("2018-09-05").toDate(),
    description: "敵の攻撃を避けながら、ステージ内にいるすべての敵を倒していく2Dアクションバトルゲーム。"
  },
  "popcorn-chef": {
    title: "3. ポップコーン職人",
    dirname: "M003_popcorn-chef",
    image: require("public/contents/materials/M003_popcorn-chef/game1.webp"),
    updatedAt: dayjs("2022-11-27 21:00:00").toDate(),
    releasedAt: dayjs("2020-04-05").toDate(),
    description: "2人のプレイヤーがリアルタイムでポップコーンを調理し、食べた量で競うカジュアルゲーム。"
  },
  "mage-simulator": {
    title: "4. メイジ・シミュレータ",
    dirname: "M004_mage-simulator",
    image: require("public/contents/materials/M004_mage-simulator/title.webp"),
    updatedAt: dayjs("2022-11-27 21:00:00").toDate(),
    releasedAt: dayjs("2021-02-25").toDate(),
    description: "モーションセンサとマイクを使って、魔法を詠唱し発動できるアプリケーション。"
  },
  marvelous: {
    title: "5. エライさんbot",
    dirname: "M005_marvelous",
    image: require("public/contents/materials/M005_marvelous/page1.webp"),
    updatedAt: dayjs("2022-11-27 21:00:00").toDate(),
    releasedAt: dayjs("2021-04-30").toDate(),
    description: "みんなの「えらい！」をカウントしてくれるdiscord Bot。"
  },
  kimifeel: {
    title: "6. キミフィール",
    dirname: "M006_kimifeel",
    image: require("public/contents/materials/M006_kimifeel/page1.webp"),
    updatedAt: dayjs("2022-11-27 21:00:00").toDate(),
    releasedAt: dayjs("2022-02-16").toDate(),
    description: "周りの人々に自分のプロフィールを書いてもらえるサービス。"
  },
  eyes: {
    title: "7. み　て　る　よ",
    dirname: "M007_eyes",
    image: require("public/contents/materials/M007_eyes/eyes.webp"),
    updatedAt: dayjs("2022-11-27 21:00:00").toDate(),
    releasedAt: dayjs("2022-02-25").toDate(),
    description: "チャットでの『入力中...』が長時間続いていると、『👁👁』を送ってくるdiscord bot。"
  },
  "rinear-raft-chap1": {
    title: "8. RineaRの筏 chap.1",
    dirname: "M008_rinear-raft-chap1",
    image: require("public/contents/materials/M008_rinear-raft-chap1/top.webp"),
    updatedAt: dayjs("2022-11-27 21:00:00").toDate(),
    releasedAt: dayjs("2022-07-03").toDate(),
    description: "RineaRに関することを公開するホームページ。"
  },
  "glass-moze": {
    title: "9. グラスモーズ",
    dirname: "M009_glass-moze",
    image: require("public/contents/materials/M009_glass-moze/play1.jpg"),
    updatedAt: dayjs("2022-11-27 21:00:00").toDate(),
    releasedAt: dayjs("2022-09-13").toDate(),
    description:
      "いろんな「グラス」で敵の弾を吸引してエネルギーを溜め、攻撃や強化をしてモンスターを殲滅する2Dアクションバトルゲーム。"
  },
  "rinear-raft-chap2": {
    title: "10. RineaRの筏 chap.2",
    dirname: "M010_rinear-raft-chap2",
    image: require("public/contents/materials/M010_rinear-raft-chap2/concept2.png"),
    updatedAt: dayjs("2022-11-27 21:00:00").toDate(),
    releasedAt: dayjs("2022-11-27").toDate(),
    description:
      "RineaRに関することを公開するホームページ。以前と比べて解釈が進み、RineaRの意味が変更された。また、デザインも大きく変更されており、全体的に明るくなっている。"
  },
  "beat-a-bit": {
    title: "11. Beat a bit",
    dirname: "M011_beat-a-bit",
    image: require("public/contents/materials/M011_beat-a-bit/wip1.jpg"),
    updatedAt: dayjs("2022-11-27 21:00:00").toDate(),
    releasedAt: undefined,
    description:
      "【進行中】「何秒後にどの能力を使いたいか」を決めた後、キャラクターを操作してゴールを目指す『謎解き』×『リズム』×『アクション』ゲーム。"
  },
  "made-highlow": {
    title: "12. メイドハイロウ",
    type: "important",
    dirname: "M012_made-highlow",
    image: lockedPic,
    updatedAt: dayjs("2022-11-27 21:00:00").toDate(),
    releasedAt: undefined,
    description:
      "【進行中】キャラクターを「大切に育てて立派になるのを目指す」か、「切り札とする代わりに犠牲にする」かの選択を迫られる、対戦型シミュレーションRPG。"
  }
};
