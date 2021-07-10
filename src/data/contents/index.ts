import { TalkContent, ProjectContent, ContentHead } from "src/lib/contents";

import bustersMission from "src/data/contents/projects/busters-mission";
import mageSimulator from "src/data/contents/projects/mage-simulator";
import marvelous from "src/data/contents/projects/marvelous";
import mazeEscape from "src/data/contents/projects/maze-escape";
import popcornChef from "src/data/contents/projects/popcorn-chef";
import rinearOfficialSite from "src/data/contents/projects/rinear-official-site";
import dummy1 from "src/data/contents/talks/dummy1";
import dummy2 from "src/data/contents/talks/dummy2";
import dummy3 from "src/data/contents/talks/dummy3";
import individualSoftwareDesign from "src/data/contents/talks/individual-software-design";
import introduction from "src/data/contents/talks/introduction";
import lookBackBackups1 from "src/data/contents/talks/look-back-backups-1";
import lookBackBackups2 from "src/data/contents/talks/look-back-backups-2";
import popcornChefNewModes from "src/data/contents/talks/popcorn-chef-new-modes";
import viewingSiteWithCoffee from "src/data/contents/talks/viewing-site-with-coffee";

class ContentsRepository {
  private contents: {
    talks: TalkContent[];
    projects: ProjectContent[];
  } = {
    talks: [
      dummy1,
      dummy2,
      dummy3,
      individualSoftwareDesign,
      introduction,
      lookBackBackups1,
      lookBackBackups2,
      popcornChefNewModes,
      viewingSiteWithCoffee
    ],
    projects: [bustersMission, mageSimulator, marvelous, mazeEscape, popcornChef, rinearOfficialSite]
  };

  public getTalkContents(): TalkContent[] {
    return this.contents.talks;
  }

  public getProjectContents(): ProjectContent[] {
    return this.contents.projects;
  }
}

export function getRoute(content: ContentHead): string {
  return `/${content.genre}/${content.id}`;
}

export const contentsRepository = new ContentsRepository();
