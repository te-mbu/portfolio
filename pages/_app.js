import "../styles/globals.css";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* TODO */}
        <link rel="icon" href="#" /> /
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}
      >
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}

export default App;
