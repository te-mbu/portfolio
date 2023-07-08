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
          text="Passion Fuels Purpose! "
          className="mb-24 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
        />
        {/* PARENT */}
        <div className="w-full flex items-center justify-between -z-10 lg:flex-col lg:gap-10 ">
          {/* ENFANT 1 */}
          <div className="w-1/2 flex flex-col items-start justify-between lg:w-full ">
            <h2 className="mb-4 text-3xl font-bold border-b-4 border-dark/75 dark:border-light/75 p-2 inline text-dark/75 dark:text-light/75">
              About Me
            </h2>
            <p className="font-medium">
              Hi, I'm CodeBucks, a web developer and UI/UX designer with a
              passion for creating beautiful, functional, and user-centered
              digital experiences. With 4 years of experience in the field. I am
              always looking for new and innovative ways to bring my clients'
              visions to life.
            </p>
            <p className="font-medium my-4">
              I believe that design is about more than just making things look
              pretty – it's about solving problems and creating intuitive,
              enjoyable experiences for users.{" "}
            </p>
            <p className="font-medium">
              Whether I'm working on a website, mobile app, or other digital
              product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
          </div>
          {/* ENFANT 2 */}
          <div className="w-1/2 max-w-xl h-full flex items-center justify-center mr-32 -z-0 lg:w-2/3 2xl:mr-0 md:w-5/6 sm:w-full">
            <div className="relative h-full w-3/4 aspect-square ">
              <Image
                src="/images/profile/profile-2.jpg"
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
