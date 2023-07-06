import React from "react";
import Layout from "./Layout";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi"


const Home = () => {
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <Layout>
        <div className="flex items-center justify-between gap-4 w-full h-full">
          <div className="relative aspect-square w-1/2 max-w-2xl h-auto rounded-full bg-light">
            <Image
              src="/images/profile/profile-1.png"
              alt="Térence MBU"
              fill
              className="w-full object-cover rounded-full border-2 shadow-xl"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText
              text="Turning Vision Into Reality With Code And Design"
              className="!text-6xl !text-left"
            />
            <p className="my-4 text-base font-medium">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center self-start mt-2">
              <Link
                href="/"
                target="_blank"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                download={true}
              >
                Resume<BiLinkExternal size={20} className="ml-1"/>
              </Link>
              <Link href="mailto:mbu.terence@gmail.com" target="_blank" className="ml-4 text-lg font-medium capitalize text-dark underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default Home;
