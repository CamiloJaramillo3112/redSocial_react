import React from "react";
import Post from "./Post";
import { postsData } from "../data/postsData";

function Feed() {
  return (
    <section className="w3-col m7">
      {postsData.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </section>
  );
}

export default Feed;

