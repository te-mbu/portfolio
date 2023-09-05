import BlogPage from "../components/BlogPage";
import Head from "next/head";
import TransitionEffect from "../components/TransitionEffect";

function About() {
  return (
    <>
      <Head>
        <title>Térence MBU | Blog Page</title>
        <meta name="Blog" content="Blog Page" />
      </Head>
      <TransitionEffect />
      <BlogPage />;
    </>
  );
}

export default About;
