import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hi, Sandip</h1>
      <Link href="/blog/first">First blog</Link>
      <Link href="/blog/second">Second blog</Link>
      <Link href="/about">About</Link>
      <Link href="/docs/routing">Docs about routing</Link>
      <Link href="/products">Products</Link>
      <Link href="/register">Register</Link>
      <Link href="/article/123?lang=en">Read article 123 in English</Link>
      <Link href="/article/456?lang=fr">Read article 456 in French</Link>
      <Link href="/order-place">Order Place</Link>
    </>
  );
}
