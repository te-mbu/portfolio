import "../styles/globals.css";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

function App({ Component, pageProps }) {
  const handleTouchMove = (event) => {
    event.preventDefault();
  };

  const router = useRouter();
  return (
    <>
      <Head>
        <title>Next.js App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon/TM.png" /> /
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full overflow-y-auto`}
        onTouchMove={handleTouchMove}
      >
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}

export default App;
