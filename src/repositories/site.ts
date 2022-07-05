import { Site } from "models";

export type SiteSettings = Site;

export async function fetchSite(): Promise<Site> {
  return (await import(`data/_site`)).default;
}
