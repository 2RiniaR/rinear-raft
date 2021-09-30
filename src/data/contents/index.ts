import bustersMission from "./projects/busters-mission";
import marvelous from "./projects/marvelous";
import mazeEscape from "./projects/maze-escape";
import popcornChef from "./projects/popcorn-chef";
import rinearOfficialSite from "./projects/rinear-official-site";
import introduction from "./talks/introduction";
import { TalkContent, ProjectContent, ContentHead } from "lib/contents";

const talks = [introduction];
const projects = [bustersMission, marvelous, mazeEscape, popcornChef, rinearOfficialSite];

class ContentsRepository {
  public contents: {
    talks: { [id: string]: TalkContent };
    projects: { [id: string]: ProjectContent };
  } = {
    talks: talks.reduce<{ [id: string]: TalkContent }>((prev, curr) => {
      prev[curr.id] = curr;
      return prev;
    }, {}),
    projects: projects.reduce<{ [id: string]: ProjectContent }>((prev, curr) => {
      prev[curr.id] = curr;
      return prev;
    }, {})
  };

  public getTalkContents(sort: "none" | "updatedAt" = "none"): TalkContent[] {
    const contents = Object.values(this.contents.talks);
    if (sort === "updatedAt")
      contents.sort((a, b) => {
        if (b.index > a.index) return 1;
        if (b.index == a.index) return 0;
        return -1;
      });
    return contents;
  }

  public getTalk(id: string): TalkContent {
    return this.contents.talks[id];
  }

  public getProjectContents(sort: "none" | "updatedAt" = "none"): ProjectContent[] {
    const contents = Object.values(this.contents.projects);
    if (sort === "updatedAt")
      contents.sort((a, b) => {
        if (b.updatedAt.isAfter(a.updatedAt)) return 1;
        if (b.updatedAt.isSame(a.updatedAt)) return 0;
        return -1;
      });
    return contents;
  }

  public getProject(id: string): ProjectContent {
    return this.contents.projects[id];
  }
}

export function getRoute(content: ContentHead): string {
  return `/${content.genre}/${content.id}`;
}

export const contentsRepository = new ContentsRepository();
