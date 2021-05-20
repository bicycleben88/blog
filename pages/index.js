import { getAllPosts } from "../lib/api";
import Head from "next/head";

export default function Index({ allPosts }) {
  console.log({ allPosts });
  return (
    <>
      <h1>Home Page</h1>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
