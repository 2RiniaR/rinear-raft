import { renderToString } from "react-dom/server";
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from "next";
import { ContentType, getContent, getContentsID, Content, Tag, getContentsHead, ContentHead } from "src/contents";

export type ContentParams = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  tags: Tag[];
  page: string;
};

function toContentParams(content: Content): ContentParams {
  return {
    id: content.id,
    title: content.title,
    createdAt: content.createdAt.toString(),
    updatedAt: content.createdAt.toString(),
    tags: content.tags,
    page: renderToString(content.page)
  };
}

export type ContentHeadParams = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  tags: Tag[];
};

function toContentHeadParams(content: ContentHead): ContentHeadParams {
  return {
    id: content.id,
    title: content.title,
    createdAt: content.createdAt.toString(),
    updatedAt: content.createdAt.toString(),
    tags: content.tags
  };
}

type GetStaticPropsInContentType = ({
  params
}: GetStaticPropsContext) => Promise<GetStaticPropsResult<{ content: ContentParams }>>;

export function getStaticPropsInContent(type: ContentType): GetStaticPropsInContentType {
  return async ({ params }: GetStaticPropsContext): Promise<GetStaticPropsResult<{ content: ContentParams }>> => {
    if (!params || typeof params.id !== "string") throw new Error("params is invalid type.");
    const content = await getContent(type, params.id);
    return { props: { content: toContentParams(content) } };
  };
}

type GetStaticPropsInContentHeadType = ({
  params
}: GetStaticPropsContext) => Promise<GetStaticPropsResult<{ contents: ContentHeadParams[] }>>;

export function getStaticPropsInContentHead(type: ContentType): GetStaticPropsInContentHeadType {
  return async () => {
    const contents = await getContentsHead(type);
    return { props: { contents: contents.map(toContentHeadParams) } };
  };
}

type GetStaticPathsInContentType = () => Promise<GetStaticPathsResult>;

export function getStaticPathsInContent(type: ContentType): GetStaticPathsInContentType {
  return async () => {
    const pagesID: string[] = await getContentsID(type);
    const paths = pagesID.map((id) => ({
      params: { id }
    }));

    return {
      paths,
      fallback: false
    };
  };
}
