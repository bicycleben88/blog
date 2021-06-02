import React from "react";

export default function Card({ post }) {
  const { slug, title, excerpt, date } = post;
  return (
    <div className="card">
      <h2>{title}</h2>
      <small>{date}</small>
      <p>{excerpt}</p>
      <a href={`/posts/${slug}`}>Link to Post</a>
    </div>
  );
}
