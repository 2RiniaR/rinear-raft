import styles from "../contents.module.scss";
import { ContentContext, ContentPage, ContentPageProps, ProjectContent } from "lib/contents";
import { arrayToDict } from "lib/helper";

export const dirPath = "src/data/contents/projects";

export class ProjectRepository {
  private readonly contents: { [id: string]: ProjectContent } = {};

  public constructor(indices: string[]) {
    const modules: ProjectContent[] = indices.map(
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      (id): ProjectContent => require(`/src/data/contents/projects/${id}`).default
    );
    this.contents = arrayToDict(
      modules,
      (modules) => modules.id,
      (modules) => ({
        ...modules,
        Page: ProjectRepository.preprocessPage(modules.Page)
      })
    );
  }

  private static preprocessPage(Children: ContentPage): ContentPage {
    function PreprocessedPage({ ...props }: ContentPageProps): JSX.Element {
      return (
        <main className={styles.content}>
          <ContentContext.Provider value={{ genre: "projects" }}>
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

  public getAllContents(sort: "none" | "updatedAt" | "releasedAt" = "none"): ProjectContent[] {
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

  public getContent(id: string): ProjectContent {
    return this.contents[id];
  }
}
