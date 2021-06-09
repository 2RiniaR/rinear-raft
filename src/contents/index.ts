import { TagType } from "src/contents/tags";
export * from "./services";
export * from "./tags";

export type Tag = {
  id: string;
  name: string;
  color: string;
};

const Contents = {
  post: "post",
  work: "work"
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
  post: "src/contents/talks",
  work: "src/contents/works"
};
