import { URL } from "url";
import path from "path";
import { visit } from "unist-util-visit";
import { serialize } from "next-mdx-remote/serialize";
import sizeOf from "image-size";
// eslint-disable-next-line import/named
import { MDXRemoteSerializeResult } from "next-mdx-remote";

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
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

export async function getMarkdownSource(markdownPath: string): Promise<MDXRemoteSerializeResult> {
  const fs = (await import("fs")).promises;
  const source = (await fs.readFile(markdownPath)).toString();
  return await serialize(source, {
    mdxOptions: { rehypePlugins: [[rehypeImageSize, { dir: path.dirname(markdownPath) }]] }
  });
}
