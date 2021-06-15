export type Tag = {
  id: string;
  name: string;
  color: string;
};

export const Tags = {
  rinear: { name: "Rinear", color: "#fff" },
  service: { name: "サービス", color: "#fff" },
  game: { name: "ゲーム", color: "#fff" },
  "web-site": { name: "ウェブサイト", color: "#fff" },
  design: { name: "デザイン", color: "#fff" },
  "discord-bot": { name: "discord bot", color: "#fff" },
  marvelous: { name: "エライさんbot", color: "#fff" },
  "maze-escape": { name: "迷宮脱出", color: "#fff" },
  "busters-mission": { name: "Busters Mission", color: "#fff" },
  "mage-simulator": { name: "メイジ・シミュレータ", color: "#fff" },
  "popcorn-chef": { name: "ポップコーン職人", color: "#fff" },
  "rinear-official-site": { name: "Rinear公式サイト", color: "#fff" }
} as const;

export type TagType = keyof typeof Tags;
