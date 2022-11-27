import { URL } from "url";
import path from "path";
import { visit } from "unist-util-visit";
import { serialize } from "next-mdx-remote/serialize";
import sizeOf from "image-size";
// eslint-disable-next-line import/named
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypeToc from "@jsdevtools/rehype-toc";
import { Node } from "unist";
import { HtmlElementNode } from "@jsdevtools/rehype-toc/lib/types";

import Slugger from "github-slugger";
import { hasProperty } from "hast-util-has-property";
import { headingRank } from "hast-util-heading-rank";
import { toString } from "hast-util-to-string";

const slugs = new Slugger();

function rehypeSlug() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  return (tree: any) => {
    slugs.reset();

    visit(tree, "element", (node) => {
      if (headingRank(node) && node.properties && !hasProperty(node, "id")) {
        node.properties.id = encodeURI(slugs.slug(toString(node)));
      }
    });
  };
}

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
    mdxOptions: {
      rehypePlugins: [
        [rehypeImageSize, { dir: path.dirname(markdownPath) }],
        rehypeSlug,
        [
          rehypeToc,
          {
            headings: ["h1", "h2", "h3"],
            nav: true,
            cssClasses: {
              toc: "",
              list: "",
              listItem: "",
              link: ""
            },
            customizeTOC: function (toc: HtmlElementNode) {
              const isHTMLElementNode = (arg: Node): arg is HtmlElementNode => "tagName" in arg;

              function replace<T extends Node>(children: T[]) {
                for (const child of children) {
                  if (!isHTMLElementNode(child)) continue;
                  if (child.type === "element" && child.tagName === "ol") child.tagName = "ul";
                  if (child.children) replace(child.children);
                }
              }

              replace([toc]);
            }
          }
        ]
      ]
    }
  });
}
