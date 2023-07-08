import React from "react";
import Layout from "./Layout";
import AnimatedText from "./AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between  rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4">
      <div className="absolute top-0 -z-10 w-[101%] h-[103%] -translate-x-11  rounded-[2.5rem] bg-dark dark:bg-light shadow-2xl lg:translate-x-3 lg:h-[102%] lg:-translate-y-0 sm:translate-x-2 sm:rounded-[2rem]" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden lg:w-full"
      >
        <div className="relative aspect-video w-full h-auto">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover rounded-3xl"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <div className="w-1/2 h-full flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline hover:underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold text-dark dark:text-light sm:text-xl xs:text-base">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="flex mt-2 items-center ">
          <Link href={github} target="_blank">
            <AiFillGithub size={40} className="fill-dark dark:fill-light" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-between  rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative xs-p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light shadow-2xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden"
      >
        <div className="relative aspect-video w-full h-auto">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover rounded-3xl"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <div className="w-full h-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline hover:underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold text-dark dark:text-light lg:text-xl">
            {title}
          </h2>
        </Link>
        <div className="flex mt-2 w-full items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="font-semibold underline text-dark dark:text-light md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank">
            <AiFillGithub size={40} className="fill-dark dark:fill-light" />
          </Link>
        </div>
      </div>
    </article>
  );
};

const ProjectsPage = () => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <Layout className="pt-16">
        <AnimatedText
          text="My Recent Work"
          className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
        />
        <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 sm:mt-10">
          <div className="col-span-12">
            <FeaturedProject
              title="Portfolio"
              img="/images/projects/portfolio.jpg"
              summary="A professional portfolio website using React JS, Tailwind CSS, Framer-motion, and Styled-components. It has smooth page transitions, unique design and it is mobile responsive."
              type="Portfolio Website"
              link="/"
              github="https://github.com/te-mbu/portfolio"
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Project
              title="Cabinet RD"
              img="/images/projects/cabinet-rd.png"
              type="Client's podiatry website"
              link="#"
              github="#"
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            {" "}
            <Project
              title="Chotto"
              img="/images/projects/chotto.jpg"
              type="Restaurant Website"
              link="https://chotto.vercel.app/"
              github="https://github.com/te-mbu/chotto"
            />
          </div>
          <div className="col-span-12">
            <FeaturedProject
              title="Twitter Clone"
              img="/images/projects/twitter-clone.jpg"
              summary="This project aimed to replicate the core functionalities of the popular social media platform Twitter using React, Tailwind CSS, Redux, MongoDB, and Node.js.
              Throughout the development process, I focused on implementing essential features, including user authentication, posting tweets,  like/delete a tweet, and displaying real-time updates. By successfully completing this project, I deepened my understanding of frontend development, state management, backend integration, and database management. "
              type="Web Application"
              link="https://twitter-clone-steel-two-89.vercel.app/"
              github="https://github.com/te-mbu/twitter-clone-backend"
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            {" "}
            {/* <Project
              title="Portfolio"
              img="/images/projects/project-portfolio.jpg"
              type="Featured Project"
              link="/"
              github="https://github.com/te-mbu/portfolio"
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            {" "}
            <Project
              title="Portfolio"
              img="/images/projects/project-portfolio.jpg"
              type="Featured Project"
              link="/"
              github="https://github.com/te-mbu/portfolio"
            /> */}
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default ProjectsPage;
