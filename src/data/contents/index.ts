import { TalkContent, ProjectContent, ContentHead, Content } from "src/lib/contents";

import bustersMission from "src/data/contents/projects/busters-mission";
import mageSimulator from "src/data/contents/projects/mage-simulator";
import marvelous from "src/data/contents/projects/marvelous";
import mazeEscape from "src/data/contents/projects/maze-escape";
import popcornChef from "src/data/contents/projects/popcorn-chef";
import rinearOfficialSite from "src/data/contents/projects/rinear-official-site";
import individualSoftwareDesign from "src/data/contents/talks/individual-software-design";
import introduction from "src/data/contents/talks/introduction";
import lookBackBackups1 from "src/data/contents/talks/look-back-backups-1";
import lookBackBackups2 from "src/data/contents/talks/look-back-backups-2";
import popcornChefNewModes from "src/data/contents/talks/popcorn-chef-new-modes";
import viewingSiteWithCoffee from "src/data/contents/talks/viewing-site-with-coffee";

class ContentsRepository {
  private news: Content[] = [introduction, viewingSiteWithCoffee, rinearOfficialSite, popcornChef];

  private contents: {
    talks: TalkContent[];
    projects: ProjectContent[];
  } = {
    talks: [
      individualSoftwareDesign,
      introduction,
      lookBackBackups1,
      lookBackBackups2,
      popcornChefNewModes,
      viewingSiteWithCoffee
    ],
    projects: [bustersMission, mageSimulator, marvelous, mazeEscape, popcornChef, rinearOfficialSite]
  };

  public getNews(): Content[] {
    return this.news;
  }

  public getTalkContents(sort: "none" | "updatedAt" = "none"): TalkContent[] {
    const contents = [...this.contents.talks];
    if (sort === "updatedAt")
      contents.sort((a, b) => {
        if (b.index > a.index) return 1;
        if (b.index == a.index) return 0;
        return -1;
      });
    return contents;
  }

  public getProjectContents(sort: "none" | "updatedAt" = "none"): ProjectContent[] {
    const contents = [...this.contents.projects];
    if (sort === "updatedAt")
      contents.sort((a, b) => {
        if (b.updatedAt.isAfter(a.updatedAt)) return 1;
        if (b.updatedAt.isSame(a.updatedAt)) return 0;
        return -1;
      });
    return contents;
  }
}

export function getRoute(content: ContentHead): string {
  return `/${content.genre}/${content.id}`;
}

export const contentsRepository = new ContentsRepository();
