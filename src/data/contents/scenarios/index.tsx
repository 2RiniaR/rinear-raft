/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import styles from "../contents.module.scss";
import { ContentContext, ContentPage, ContentPageProps, ScenarioContent } from "lib/contents";

export const dirPath = "src/data/contents/scenarios";

export class ScenarioRepository {
  private readonly contents: { [id: string]: ScenarioContent } = {};

  public constructor(indices: string[]) {
    const modules: ScenarioContent[] = indices.map(
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      (id): ScenarioContent => require(`/src/data/contents/scenarios/${id}`).default
    );

    for (const module of modules) {
      this.contents[module.id] = {
        ...module,
        Page: ScenarioRepository.preprocessPage(module.Page)
      };
    }
  }

  private static preprocessPage(Children: ContentPage): ContentPage {
    function PreprocessedPage({ ...props }: ContentPageProps): JSX.Element {
      return (
        <main className={styles.content}>
          <ContentContext.Provider value={{ genre: "scenarios" }}>
            <Children {...props} />
          </ContentContext.Provider>
        </main>
      );
    }

    return PreprocessedPage;
  }

  public getIndex(): string[] {
    return Object.keys(this.contents);
  }

  public getAllContents(sort: "none" | "updatedAt" | "releasedAt" = "none"): ScenarioContent[] {
    const contents = Object.values(this.contents);
    if (sort === "updatedAt")
      contents.sort((a, b) => {
        if (b.updatedAt.isAfter(a.updatedAt)) return 1;
        if (b.updatedAt.isSame(a.updatedAt)) return 0;
        return -1;
      });
    else if (sort === "releasedAt")
      contents.sort((a, b) => {
        if (!b.releasedAt || b.releasedAt.isAfter(a.releasedAt)) return 1;
        if (b.releasedAt.isSame(a.releasedAt)) return 0;
        return -1;
      });
    return contents;
  }

  public getContent(id: string): ScenarioContent {
    return this.contents[id];
  }
}
