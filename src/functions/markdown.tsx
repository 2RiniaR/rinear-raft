// eslint-disable-next-line import/named
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import NextImage, { ImageProps } from "next/image";

type MarkdownImageProps = ImageProps & {
  src: string;
  width: number;
  height: number;
};

const size = 600;

const MarkdownImage = ({ width, height, src, ...props }: MarkdownImageProps) => (
  <NextImage
    {...props}
    src={src.slice("public".length)}
    width={size}
    height={(size * height) / width}
    sizes={size ? `${size}px` : undefined}
  />
);

const components = {
  img: (props: any) => <MarkdownImage {...props} />
};

type MarkdownContentProps = {
  source: MDXRemoteSerializeResult;
};

export const MarkdownContent = ({ source }: MarkdownContentProps) => (
  <MDXRemote {...source} components={components} lazy />
);
