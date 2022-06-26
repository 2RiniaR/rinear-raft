import { StaticImageData } from "next/image";

export type Scene = {
  title: string;
  thumbnail: StaticImageData;
  Document: () => JSX.Element;
};

export type Story = {
  scenes: Scene[];
};
