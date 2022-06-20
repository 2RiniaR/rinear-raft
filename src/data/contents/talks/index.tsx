/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import styles from "../contents.module.scss";
import { TalkContent, ContentContext, ContentPage, ContentPageProps } from "lib/contents";
import { arrayToDict } from "lib/helper";

export const dirPath = "src/data/contents/talks";

export class TalkRepository {
  private readonly contents: { [id: string]: TalkContent } = {};

  public constructor(indices: string[]) {
    const modules: TalkContent[] = indices.map(
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      (id): TalkContent => require(`/src/data/contents/talks/${id}`).default
    );
    this.contents = arrayToDict(
      modules,
      (modules) => modules.id,
      (modules) => ({
        ...modules,
        Page: TalkRepository.preprocessPage(modules.Page)
      })
    );
  }

  private static preprocessPage(Children: ContentPage): ContentPage {
    function PreprocessedPage({ ...props }: ContentPageProps): JSX.Element {
      return (
        <main className={styles.content}>
          <ContentContext.Provider value={{ genre: "talks" }}>
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

  public getAllContents(sort: "none" | "updatedAt" = "none"): TalkContent[] {
    const contents = Object.values(this.contents);
    if (sort === "updatedAt")
      contents.sort((a, b) => {
        if (b.updatedAt.isAfter(a.updatedAt)) return 1;
        if (b.updatedAt.isSame(a.updatedAt)) return 0;
        return -1;
      });
    return contents;
  }

  public getContent(id: string): TalkContent {
    return this.contents[id];
  }
}
