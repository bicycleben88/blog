import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Layout from "../components/Layout";
import Card from "../components/Card";

export default function Index({ allPosts }) {
  return (
    <Layout>
      <Head>
        <title>Botham City Blog</title>
      </Head>
      {allPosts.map((post) => (
        <Card key={post.slug} post={post} />
      ))}
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
