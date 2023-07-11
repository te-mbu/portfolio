import "../styles/globals.css";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

function App({ Component, pageProps }) {

  useEffect(() => {
    const handleTouchMove = (event) => {
      event.preventDefault();
    };
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const router = useRouter()

  return (
    <>
      <Head>
        <title>Next.js App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* TODO */}
        <link rel="icon" href="#" /> /
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full overscroll-none`}
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
