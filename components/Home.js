import React from "react";
import Layout from "./Layout";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import HireMe from "./HireMe";

const Home = () => {
  return (
    <main className="flex items-center text-dark dark:text-light w-full min-h-screen">
      <Layout className="pt-0 md:pt-16 sm:pt-8">
        <div className="flex items-center justify-between gap-4 w-full h-full lg:flex-col">
          <div className="relative aspect-square w-1/2 max-w-lg md:inline-block 2xl:w-[400px] sm:w-2/3 h-auto rounded-full bg-light">
            <Image
              src="/images/profile/profile-1.png"
              alt="Térence MBU"
              fill
              className="object-cover rounded-full border-2 shadow-lg shadow-dark dark:shadow-light"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center lg:w-full">
            <AnimatedText
              text="Térence MBU"
              className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text3xl"
            />
            <p className="my-4 text-base font-medium md:text-md sm:text-sm md:my-8">
              I&apos;m a France based Fullstack Web Developer dedicated to turning ideas
              into innovative, clean & user-friendly web applications. Explore my latest projects showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center self-start mt-2 lg:self-center sm:mb-16">
              <Link
                href="/CV-MBU-TERENCE.pdf"
                target="_blank"
                className="flex items-center bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light border-2 border-solid border-transparent hover:border-dark hover:dark:border-light"
                download={true}
              >
                Resume
                <BiLinkExternal size={20} className="ml-1" />
              </Link>
              <Link
                href="mailto:mbu.terence@gmail.com"
                target="_blank"
                className="ml-4 text-lg font-medium capitalize text-dark dark:text-light underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      <HireMe />
    </main>
  );
};

export default Home;
