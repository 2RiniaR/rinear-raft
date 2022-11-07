import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { ReactNode } from "react";
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

export type MarkdownPageProps = {
  source: MDXRemoteSerializeResult;
};

export function MarkdownContent(
  builder: (content: ReactNode) => JSX.Element
): (pageProps: MarkdownPageProps) => JSX.Element {
  return (pageProps: MarkdownPageProps) => builder(<MDXRemote {...pageProps.source} components={components} lazy />);
}
