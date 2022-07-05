import { getAllContents, getRoute } from "./content";
import settings from "data/_home";
import { ContentHead } from "types/content";
import { HomeSettings, Pickup } from "types";

export function getHomeSettings(): HomeSettings {
  return settings;
}

export async function fetchPickupContents(): Promise<Pickup[]> {
  if (settings.pickups.type === "custom") return settings.pickups.items;
  return getLatestContents(settings.pickups.count);
}

function pickupContent(content: ContentHead): Pickup {
  return {
    title: content.title,
    href: getRoute(content),
    thumbnail: content.thumbnail
  };
}

async function getLatestContents(count: number): Promise<Pickup[]> {
  const contents = await getAllContents();
  contents.sort((a, b) => {
    if (b.updatedAt.isAfter(a.updatedAt)) return 1;
    if (b.updatedAt.isSame(a.updatedAt)) return 0;
    return -1;
  });

  const pickups: Pickup[] = [];
  for (let i = 0; i < Math.min(count, contents.length); i++) {
    const content = contents[i];
    pickups.push(pickupContent(content));
  }

  return pickups;
}
