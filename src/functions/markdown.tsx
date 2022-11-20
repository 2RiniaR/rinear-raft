// eslint-disable-next-line import/named
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import NextImage, { ImageProps } from "next/image";
import { ExternalLink } from "./link";

type MarkdownImageProps = ImageProps & {
  src: string;
  width: number;
  height: number;
};

const size = 750;

const MarkdownImage = ({ width, height, src, ...props }: MarkdownImageProps) => (
  <NextImage
    {...props}
    src={src.slice("public".length)}
    width={size}
    height={(size * height) / width}
    sizes={size ? `${size}px` : undefined}
    quality={100}
  />
);

const components = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img: (props: any) => <MarkdownImage {...props} />,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  a: ({ href, children, ...props }: any) => {
    if (href.startsWith("#")) {
      const scroll = () => {
        const target = document.getElementById(href.slice("#".length));
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      };
      return (
        <a role="link" tabIndex={0} onClick={scroll} onKeyDown={scroll} {...props}>
          {children}
        </a>
      );
    }

    return (
      <ExternalLink href={href} {...props}>
        {children}
      </ExternalLink>
    );
  }
};

type MarkdownContentProps = {
  source: MDXRemoteSerializeResult;
};

export const MarkdownContent = ({ source }: MarkdownContentProps) => (
  <MDXRemote {...source} components={components} lazy />
);
