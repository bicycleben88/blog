import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Layout from "../components/Layout";

export default function Index({ allPosts }) {
  console.log({ allPosts });
  return (
    <Layout>
      <h1>Home Page</h1>
    </Layout>
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
