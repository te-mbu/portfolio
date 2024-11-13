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
          {github ? (
            <Link href={github} target="_blank">
              <AiFillGithub size={40} className="fill-dark dark:fill-light" />
            </Link>
          ) : (
            <div></div>
          )}
          <Link
            href={link}
            target="_blank"
            className={`${
              github ? "ml-4" : ""
            } rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base`}
          >
            Voir le projet
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
            className="
               rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Voir
          </Link>
          {github ? (
            <Link href={github} target="_blank">
              <AiFillGithub size={40} className="fill-dark dark:fill-light" />
            </Link>
          ) : null}
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
          text="Portfolio"
          className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
        />
        <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 sm:mt-10">
          <div className="col-span-12">
            <FeaturedProject
              title="Studio A3"
              img="/images/projects/studioa3.jpg"
              summary="J'ai transformé la vision de Studio A3 en réalité avec un site web propulsé par React.js, Next.js et Tailwind CSS. Mêlant harmonieusement créativité et finesse technique, le projet a abouti à une expérience utilisateur exceptionnelle. Je suis ravi de présenter cette collaboration fructueuse."
              type="Site web d'une agence de web design"
              link="https://www.studio-a3.com/"
              github=""
            />
          </div>
          <div className="col-span-12">
            <FeaturedProject
              title="Portfolio"
              img="/images/projects/portfolio.jpg"
              summary="Un site web de portfolio professionnel utilisant React.js, Next.js, Tailwind CSS et Framer-motion. Il présente des transitions de page fluides, un design unique et est responsive."
              type="Site personnel"
              link="/"
              github="https://github.com/te-mbu/portfolio"
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Project
              title="Cabinet R&D"
              img="/images/projects/cabinetR&D.png"
              type="Site web d'un pédicure-podologue"
              link="https://www.pedicure-podologue-dijon-rd.com/"
              github=""
            />
          </div>
          {/* <div className="col-span-6 sm:col-span-12">
            {" "}
            <Project
              title="Chotto"
              img="/images/projects/chotto.jpg"
              type="Site d'un restaurant Japonais"
              link="https://chotto.vercel.app/"
              github="https://github.com/te-mbu/chotto"
            />
          </div> */}
          {/* <div className="col-span-12">
            <FeaturedProject
              title="Twitter Clone"
              img="/images/projects/twitter-clone.jpg"
              summary="Ce projet visait à reproduire les fonctionnalités principales de Twitter en utilisant React.js, Next.js, Tailwind CSS, Redux, MongoDB et Node.js. Tout au long du processus de développement, j'ai mis l'accent sur la mise en œuvre de fonctionnalités essentielles, telles que l'authentification des utilisateurs, la publication de tweets, le like/suppression d'un tweet et l'affichage des mises à jour en temps réel. En menant à bien ce projet, j'ai approfondi ma compréhension de la gestion d'état, de l'intégration frontend/backend et de la gestion de base de données."
              type="Application Web"
              link="https://twitter-clone-steel-two-89.vercel.app/"
              github="https://github.com/te-mbu/twitter-clone-backend"
            />
          </div> */}
          {/* <div className="col-span-6 sm:col-span-12">
       
            <Project
              title="Portfolio"
              img="/images/projects/project-portfolio.jpg"
              type="Featured Project"
              link="/"
              github="https://github.com/te-mbu/portfolio"
            />
          </div> */}
          {/* <div className="col-span-6 sm:col-span-12">
            {" "}
            <Project
              title="Portfolio"
              img="/images/projects/project-portfolio.jpg"
              type="Featured Project"
              link="/"
              github="https://github.com/te-mbu/portfolio"
            />
          </div> */}
        </div>
      </Layout>
    </main>
  );
};

export default ProjectsPage;
