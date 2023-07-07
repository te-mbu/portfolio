import React from "react";
import AnimatedText from "./AnimatedText";
import Layout from "./Layout";
import Image from "next/image";
import Experiences from "./Experiences";

const AboutPage = () => {
  return (
    <main className="flex flex-col w-full items-center justify-center">
      <Layout className="pt-16">
        <AnimatedText text="Passion Fuels Purpose! " className="mb-24" />
        <div className="grid w-full grid-cols-8 gap-16 max-w-6xl m-auto">
          <div className="col-span-4 flex flex-col items-start justify-start">
            <h2 className="mb-4 text-3xl font-bold border-b-4 border-dark/75 p-2 inline text-dark/75">
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
          <div className="col-span-4 relative rounded-2xl flex items-center justify-center ">
            <div className="absolute w-[400px] aspect-square top-[50%] z-20 -translate-y-1/2">
              <Image
                src="/images/profile/profile-2.jpg"
                fill
                alt="Térence MBU"
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="absolute w-[450px] h-[450px] top-[50%] -translate-y-1/2 rounded-2xl bg-light z-10 border-2 border-solid border-dark"></div>
            <div className="absolute w-[460px] h-[460px] top-[50%] translate-x-3 -translate-y-[47%] rounded-[2rem] bg-dark z-0 border-2 border-solid border-dark shadow-2xl"></div>
          </div>
        </div>
        <Experiences />
      </Layout>
    </main>
  );
};

export default AboutPage;
