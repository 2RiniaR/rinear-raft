import { TagType } from "src/contents/tags";
export * from "./services";
export * from "./tags";

export type Tag = {
  id: string;
  name: string;
  color: string;
};

const Contents = {
  talk: "talk",
  project: "project"
} as const;

export type ContentType = typeof Contents[keyof typeof Contents];

export type ContentHead = {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  tags: Tag[];
};

export type Content = {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  tags: Tag[];
  page: JSX.Element;
};

export type ContentForm = {
  title: string;
  createdAt: Date;
  updatedAt: Date;
  tags: TagType[];
  page: JSX.Element;
};

export const dirPaths: { [type in ContentType]: string } = {
  talk: "src/contents/talks",
  project: "src/contents/project"
};
