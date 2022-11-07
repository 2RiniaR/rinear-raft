import { URL } from "url";
import path from "path";
import { visit } from "unist-util-visit";
import { GetStaticPropsResult } from "next";
import { serialize } from "next-mdx-remote/serialize";
import sizeOf from "image-size";
import { MarkdownPageProps } from "../functions/markdown";

type Options = {
  dir?: string;
};

const stringIsAValidUrl = (str: string) => {
  try {
    new URL(str);
    return true;
  } catch (error) {
    return false;
  }
};

function rehypeImageSize(options: Options = {}) {
  return (tree: any, _: any) => {
    visit(tree, "element", (node) => {
      if (node.tagName !== "img") return;
      if (!stringIsAValidUrl(node.properties.src)) {
        const imagePath = (options.dir ? `${options.dir}/` : "") + node.properties.src;
        const { width, height } = sizeOf(imagePath);
        node.properties.src = imagePath;
        node.properties.width = width;
        node.properties.height = height;
      }
    });
  };
}

export async function getMarkdownStaticProps(markdownPath: string): Promise<GetStaticPropsResult<MarkdownPageProps>> {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const fs = (await import("fs")).promises;
  const source = (await fs.readFile(markdownPath)).toString();
  return {
    props: {
      source: await serialize(source, {
        mdxOptions: { rehypePlugins: [[rehypeImageSize, { dir: path.dirname(markdownPath) }]] }
      })
    }
  };
}
