import { sortWithDatetime } from "../utils/datetime";
import { fetchAllContents } from "./content";
import { pathOf } from "routes";
import { Home, Pickup } from "models/home";

export type HomeSettings = Omit<Home, "pickups"> & {
  pickups: { type: "latest"; count: number } | { type: "custom"; items: Pickup[] };
};

export async function fetchHome(): Promise<Home> {
  const settings: HomeSettings = (await import(`data/_home`)).default;
  return {
    ...settings,
    pickups: await fetchPickups(settings)
  };
}

export async function fetchPickups(settings: HomeSettings): Promise<Pickup[]> {
  if (settings.pickups.type === "custom") return settings.pickups.items;
  return getLatestContents(settings.pickups.count);
}

async function getLatestContents(count: number): Promise<Pickup[]> {
  const contents = sortWithDatetime(await fetchAllContents(), (content) => content.updatedAt);
  return contents.slice(0, count).map((content) => ({
    title: content.title,
    href: pathOf(content),
    thumbnail: content.thumbnail
  }));
}
