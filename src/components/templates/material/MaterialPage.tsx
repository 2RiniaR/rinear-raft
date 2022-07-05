import React, { useState } from "react";
import styles from "./MaterialPage.module.scss";
import { MaterialTop } from "./Top";
import { BackButton, ContentPage } from "components/templates";
import { ChaptersView } from "components/parts";
import { ContentContext } from "constants/content";
import { Chapter, Material } from "models/content";

type Props = {
  material: Material;
};

export const MaterialPage = ({ material }: Props): JSX.Element => {
  const [chapters, setChapters] = useState<Chapter[]>([]);

  return (
    <ContentPage>
      <BackButton href={"/materials"} />
      <div className={styles.layout}>
        <MaterialTop material={material} />
        <ChaptersView chapters={chapters} />
        <main className={styles.content}>
          <ContentContext.Provider value={{ genre: "letter" }}>
            <material.Page setChapters={setChapters} />
          </ContentContext.Provider>
        </main>
      </div>
    </ContentPage>
  );
};
