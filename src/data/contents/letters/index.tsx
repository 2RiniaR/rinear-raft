/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import styles from "../contents.module.scss";
import { ContentContext, ContentPage, ContentPageProps, LetterContent } from "lib/contents";
import { arrayToDict } from "lib/helper";

export const dirPath = "src/data/contents/letters";

export class LetterRepository {
  private readonly contents: { [id: string]: LetterContent } = {};

  public constructor(indices: string[]) {
    const modules: LetterContent[] = indices.map(
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      (id): LetterContent => require(`/src/data/contents/letters/${id}`).default
    );
    this.contents = arrayToDict(
      modules,
      (modules) => modules.id,
      (modules) => ({
        ...modules,
        Page: LetterRepository.preprocessPage(modules.Page)
      })
    );
  }

  private static preprocessPage(Children: ContentPage): ContentPage {
    function PreprocessedPage({ ...props }: ContentPageProps): JSX.Element {
      return (
        <main className={styles.content}>
          <ContentContext.Provider value={{ genre: "letters" }}>
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

  public getAllContents(sort: "none" | "updatedAt" = "none"): LetterContent[] {
    const contents = Object.values(this.contents);
    if (sort === "updatedAt")
      contents.sort((a, b) => {
        if (b.updatedAt.isAfter(a.updatedAt)) return 1;
        if (b.updatedAt.isSame(a.updatedAt)) return 0;
        return -1;
      });
    return contents;
  }

  public getContent(id: string): LetterContent {
    return this.contents[id];
  }
}
