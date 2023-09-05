import React from "react";
import AnimatedText from "./AnimatedText";
import Layout from "./Layout";
import Article from "./Article";

const BlogPage = () => {
  return (
    <main className="flex flex-col w-full items-center justify-center">
      <Layout className="pt-16">
        <AnimatedText
          text="Articles"
          className="mb-24 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
        />
        <div className="flex flex-col gap-14">
          <Article />
          <Article />
        </div>
      </Layout>
    </main>
  );
};

export default BlogPage;
