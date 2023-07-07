import React from "react";
import Layout from "./Layout";
import AnimatedText from "./AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between  rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-12 relative">
      <div className="absolute top-0 -z-10 w-[101%] h-[103%] -translate-x-11  rounded-[2.5rem] bg-dark dark:bg-light shadow-2xl" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden"
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
      <div className="w-1/2 h-full flex flex-col items-start justify-between pl-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline hover:underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold text-dark dark:text-light">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="flex mt-2 items-center ">
          <Link href={github} target="_blank">
            <AiFillGithub size={40} className="fill-dark dark:fill-light"/>
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold"
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
    <article className="w-full flex flex-col items-center justify-between  rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light shadow-2xl" />
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
        <span className="text-primary dark:text-primaryDark font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline hover:underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold text-dark dark:text-light">{title}</h2>
        </Link>
        <div className="flex mt-2 w-full items-center justify-between">
          <Link href={link} target="_blank" className="font-semibold underline text-dark dark:text-light">
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
        <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16" />
        <div className="grid grid-cols-12 gap-24 gap-y-32">
          <div className="col-span-12">
            <FeaturedProject
              title="Portfolio"
              img="/images/projects/project-portfolio.jpg"
              summary="A professional portfolio website using React JS, Tailwind CSS, Framer-motion, and Styled-components. It has smooth page transitions, unique design and it is mobile responsive."
              type="Featured Project"
              link="/"
              github="https://github.com/te-mbu/portfolio"
            />
          </div>
          <div className="col-span-6">
            <Project
              title="Portfolio"
              img="/images/projects/project-portfolio.jpg"
              type="Featured Project"
              link="/"
              github="https://github.com/te-mbu/portfolio"
            />
          </div>
          <div className="col-span-6">
            {" "}
            <Project
              title="Portfolio"
              img="/images/projects/project-portfolio.jpg"
              type="Featured Project"
              link="/"
              github="https://github.com/te-mbu/portfolio"
            />
          </div>
          <div className="col-span-12">
            <FeaturedProject
              title="Portfolio"
              img="/images/projects/project-portfolio.jpg"
              summary="A professional portfolio website using React JS, Tailwind CSS, Framer-motion, and Styled-components. It has smooth page transitions, unique design and it is mobile responsive."
              type="Featured Project"
              link="/"
              github="https://github.com/te-mbu/portfolio"
            />
          </div>
          <div className="col-span-6">
            {" "}
            <Project
              title="Portfolio"
              img="/images/projects/project-portfolio.jpg"
              type="Featured Project"
              link="/"
              github="https://github.com/te-mbu/portfolio"
            />
          </div>
          <div className="col-span-6">
            {" "}
            <Project
              title="Portfolio"
              img="/images/projects/project-portfolio.jpg"
              type="Featured Project"
              link="/"
              github="https://github.com/te-mbu/portfolio"
            />
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default ProjectsPage;
