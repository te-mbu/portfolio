import Home from "../components/Home";
import TransitionEffect from "../components/TransitionEffect";
import Head from "next/head";

function Index() {
  return (
    <>
      <Head>
        <title>Térence MBU | Portfolio</title>
        <meta name="Home" content="Homepage" />
      </Head>
      <TransitionEffect />
      <Home />;
    </>
  );
}

export default Index;
