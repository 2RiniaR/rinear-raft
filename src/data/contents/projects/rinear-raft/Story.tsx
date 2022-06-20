/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import { Paragraph, Strong } from "content-parts";

const Section = (): JSX.Element => (
  <>
    <Paragraph>
      以前、私個人とその活動を紹介するポートフォリオサイトが公開されていたが、あるとき私はその出来に満足がいかずこれを削除した。
      その後、自分の作品一覧を公開する場所がないことが不便に感じたため、作品置き場としてのホームページ制作が開始された。
    </Paragraph>
    <Paragraph>
      しかし同時に、私は諸事情により一般的で大規模なコミュニケーションの場において、自身の活動について情報発信することを拒むようになった。
      それでも私は情報発信の場所が欲しかったため、このとき作っていた作品置き場を自分独自の活動拠点として拡張することにした。
      そのため、デザインはかなり独自色の強いものとなり、私個人についての紹介要素の一切を省いたものとなった。
      作品置き場としての役目をPROJECTSの項目で担うことになり、それに加えて、作品制作よりも粒度の小さい活動の公開場所としてTALKSの項目が追加された。
    </Paragraph>
    <Paragraph>
      やがて、このような個人活動を纏めた概念として<Strong>RineaR</Strong>
      が出来上がり、当活動場所はこれを確立するための重要な要素となった。
    </Paragraph>
  </>
);

export default Section;
