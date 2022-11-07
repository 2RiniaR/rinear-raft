import dayjs from "dayjs";
import { Material } from "./index";
import bustersMissionPic from "public/contents/materials/busters-mission/stage3-2.webp";
import eyesPic from "public/contents/materials/eyes/eyes.webp";
import kimifeelPic from "public/contents/materials/kimifeel/page1.webp";
import mageSimulatorPic from "public/contents/materials/mage-simulator/title.webp";
import marvelousPic from "public/contents/materials/marvelous/page1.webp";
import mazeEscapePic from "public/contents/materials/maze-escape/stage1.webp";
import popcornChefPic from "public/contents/materials/popcorn-chef/game1.webp";
import rinearRaftPic from "public/contents/materials/rinear-raft/top.webp";

export const materials: { [id: string]: Material } = {
  "busters-mission": {
    id: "busters-mission",
    title: "Busters Mission",
    image: bustersMissionPic,
    updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
    releasedAt: dayjs("2018-09-05").toDate(),
    description: "敵の攻撃を避けながら、ステージ内にいるすべての敵を倒していく2Dアクションゲーム。"
  },
  eyes: {
    id: "eyes",
    title: "み　て　る　よ",
    image: eyesPic,
    updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
    releasedAt: dayjs("2022-02-25").toDate(),
    description:
      "誰かがチャットを送ろうとして長考しているのを検知すると、超低確率で目が2つ並んだメッセージを送ってくるDiscord bot。"
  },
  kimifeel: {
    id: "kimifeel",
    title: "キミフィール",
    image: kimifeelPic,
    updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
    releasedAt: dayjs("2022-02-16").toDate(),
    description: "周りの人々に自分のプロフィールを書いてもらえるサービス。"
  },
  "mage-simulator": {
    id: "mage-simulator",
    title: "メイジ・シミュレータ",
    image: mageSimulatorPic,
    updatedAt: dayjs("2022-07-29 12:50:00").toDate(),
    releasedAt: dayjs("2021-02-25").toDate(),
    description: "モーションセンサとマイクを使って、魔法を詠唱し発動できるアプリケーション。"
  },
  marvelous: {
    id: "marvelous",
    title: "エライさんbot",
    image: marvelousPic,
    updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
    releasedAt: dayjs("2021-04-30").toDate(),
    description: "みんなの「えらい！」をカウントしてくれるDiscord Bot。"
  },
  "maze-escape": {
    id: "maze-escape",
    title: "迷宮脱出",
    image: mazeEscapePic,
    updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
    releasedAt: dayjs("2016-10-18").toDate(),
    description: "上下左右にプレイヤーを移動し、制限時間以内にゴールを目指す2Dアクション脱出ゲーム。"
  },
  "popcorn-chef": {
    id: "popcorn-chef",
    title: "Pon! Bon! Rush",
    image: popcornChefPic,
    updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
    releasedAt: dayjs("2020-04-05").toDate(),
    description:
      "2人のプレイヤーがリアルタイムでポップコーンを調理し、調理したポップコーンを食べた量で競う2人通信対戦のカジュアルゲーム。"
  },
  "rinear-raft": {
    id: "rinear-raft",
    title: "RineaRの筏",
    image: rinearRaftPic,
    updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
    releasedAt: dayjs("2022-07-03").toDate(),
    description: "『RineaR』の活動拠点であり、制作物や投稿を公開するホームページ。"
  }
};
