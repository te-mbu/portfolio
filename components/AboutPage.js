import React from "react";
import AnimatedText from "./AnimatedText";
import Layout from "./Layout";
import Image from "next/image";
import Stack from "./Stack";
import Experiences from "./Experiences";
import Education from "./Education";

const AboutPage = () => {
  return (
    <main className="flex flex-col w-full items-center justify-center">
      <Layout className="pt-16">
        <AnimatedText
          text="Who is this guy ?"
          className="mb-24 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
        />
        {/* PARENT */}
        <div className="w-full flex items-center justify-between -z-10 lg:flex-col lg:gap-10 ">
          {/* ENFANT 1 */}
          <div className="w-1/2 flex flex-col items-start justify-between lg:w-full ">
            <h2 className="mb-4 text-3xl font-bold border-b-4 border-dark/75 dark:border-light/75 inline text-dark/75 dark:text-light/75 lg:text-2xl">
              À propos de moi
            </h2>
            <p className="font-medium dark:text-light">
              Bonjour, je suis Térence MBU, un Développeur Frontend dédié à la
              création d'expériences digitales attrayantes, fonctionnelles et
              centrées sur l'utilisateur.
            </p>
            <p className="font-medium mt-4 dark:text-light">
              Je suis autodidacte, j'ai perfectionné mes compétences grâce à des
              expériences pratiques et une volonté d'apprentissage continu. Tout
              au long de mon parcours éducatif, j'ai acquis des bases solides et
              développé un œil attentif pour le détail.
            </p>
            <p className="font-medium my-4 dark:text-light">
              Je suis animé par le désir de repousser les limites et de fournir
              un travail de haute qualité qui laisse une empreinte positive sur
              les utilisateurs.
            </p>
            <p className="font-medium dark:text-light">
              Je me réjouis de mettre en œuvre mes compétences pour votre
              prochain projet.
            </p>
          </div>
          {/* ENFANT 2 */}
          <div className="w-1/2 max-w-xl h-full flex items-center justify-center mr-32 -z-0 lg:w-2/3 2xl:mr-0 md:w-5/6 sm:w-full">
            <div className="relative h-full w-3/4 aspect-square ">
              <Image
                src="/images/profile/terence.jpeg"
                fill
                alt="Térence MBU"
                className="object-cover rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute w-[105%] h-[105%] rounded-[2rem]  bg-dark dark:bg-light -z-10 border-2 border-solid border-dark dark:border-light shadow-2xl"></div>
              <div className="absolute w-[106%] h-[106%]  left-[50%]  translate-x-[-50%] top-[50%]  translate-y-[-50%] -z-10 rounded-2xl bg-light dark:bg-dark  border-2 border-solid border-dark dark:border-light"></div>
            </div>
          </div>
        </div>
        <Stack />
        <Experiences />
        <Education />
      </Layout>
    </main>
  );
};

export default AboutPage;
