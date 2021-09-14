import bustersMission from "./projects/busters-mission";
import mageSimulator from "./projects/mage-simulator";
import marvelous from "./projects/marvelous";
import mazeEscape from "./projects/maze-escape";
import popcornChef from "./projects/popcorn-chef";
import rinearOfficialSite from "./projects/rinear-official-site";
import individualSoftwareDesign from "./talks/individual-software-design";
import introduction from "./talks/introduction";
import lookBackBackups1 from "./talks/look-back-backups-1";
import lookBackBackups2 from "./talks/look-back-backups-2";
import popcornChefNewModes from "./talks/popcorn-chef-new-modes";
import viewingSiteWithCoffee from "./talks/viewing-site-with-coffee";
import { TalkContent, ProjectContent, ContentHead } from "lib/contents";

class ContentsRepository {
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
