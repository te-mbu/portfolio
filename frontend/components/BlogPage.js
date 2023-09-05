import React from "react";
import AnimatedText from "./AnimatedText";
import Layout from "./Layout";
import Article from "./Article";
import MainArticle from "./MainArticle";
import { useState, useEffect } from "react";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        if (data.allPosts) {
          setPosts(data.allPosts);
        }
      });
  }, []);

  const mainArticle = posts[0] && (
    <MainArticle
      topic={posts[0].topic}
      title={posts[0].title}
      author={posts[0].author}
      href={posts[0].href}
    />
  );

  const displayArticles = posts.map((data, i) => {
    if (i > 0) {
      return (
        <Article
          key={i}
          topic={data.topic}
          title={data.title}
          author={data.author}
          href={data.href}
        />
      );
    }
  });

  return (
    <main className="flex flex-col w-full items-center justify-center">
      <Layout className="pt-16">
        <AnimatedText
          text="Articles"
          className="mb-24 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
        />
        <div className="grid grid-cols-4 gap-y-14 gap-x-8 sm:grid-cols-2">
          {mainArticle}
          {displayArticles}
        </div>
      </Layout>
    </main>
  );
};

export default BlogPage;
