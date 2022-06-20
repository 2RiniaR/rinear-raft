import React from "react";
import styles from "./Description.module.scss";

const Description = (): JSX.Element => (
  <section className={styles.body}>
    <p>
      『RineaR（りにあ）』とは、クリエイター『Rinia（りにあ）』による個人活動・個人制作物の総称。明確な目標を持ったプロジェクトや、複数メンバーで活動するサークルではない。
    </p>
    <p>
      そのときに、作りたいと思ったものを作って楽しむ。現在は主にゲームやサービス等を制作しているが、活動範囲は限定していない。制作の途中経過やアイデアなどは当サイトのTALKSへ投稿し、制作物やプロジェクトはPROJECTSへ投稿する。
    </p>
  </section>
);

export default Description;
