import Link from "next/link";

export default function HomePage(): JSX.Element {
  return (
    <div>
      <h2>Home page</h2>
      <Link href="/portal">
        <a>Go to portal</a>
      </Link>
    </div>
  );
}
