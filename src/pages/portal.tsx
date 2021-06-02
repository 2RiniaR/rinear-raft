import Link from "next/link";

export default function PortalPage(): JSX.Element {
  return (
    <div>
      <h2>Portal page</h2>
      <Link href="/">
        <a>Go to home</a>
      </Link>
      <Link href="/posts">
        <a>Go to posts</a>
      </Link>
      <Link href="/works">
        <a>Go to works</a>
      </Link>
    </div>
  );
}
