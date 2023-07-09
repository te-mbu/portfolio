import AboutPage from "../components/AboutPage";
import Head from "next/head";
import TransitionEffect from "../components/TransitionEffect";

function About() {
  return (
    <>
      <Head>
        <title>Térence MBU | About Page</title>
        <meta name="About" content="About Page" />
      </Head>
      <div className="
      !bg-light dark:!bg-dark">

      <TransitionEffect />
      <AboutPage />;
      </div>
    </>
  );
}

export default About;
