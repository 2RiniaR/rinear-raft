import { StaticImageData } from "next/image";

export type About = {
  Document: () => JSX.Element;
};

export type Pickup = {
  thumbnail: StaticImageData;
  href: string;
  title: string;
};

export type StoryScene = {
  title: string;
  thumbnail: StaticImageData;
  Document: () => JSX.Element;
};

export type Story = {
  scenes: StoryScene[];
};

export type HomeSettings = {
  pickups: { type: "latest"; count: number } | { type: "custom"; items: Pickup[] };
  story: Story;
  about: About;
};

export type SiteSettings = {
  name: string;
  description: string;
  url: string;
  version: string;
};
