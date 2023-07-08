import React from "react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl text-dark dark:text-light sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full text-dark dark:text-light md:text-sm">
          {info}
        </p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mt-16 mb-80">
      <h2 className="text-3xl font-bold border-b-4 border-dark/75 dark:border-light/75 inline text-dark/75 dark:text-light/75">
        Education
      </h2>
      <div ref={ref} className="w-full mx-auto relative mt-14">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Web and Mobile Fullstack Coding Bootcamp"
            time="2023"
            place="La Capsule - Paris, France"
            info={
              <>
                10-week coding bootcamp - Web and Mobile Fullstack JavaScript
                Development
                <br />
                <ul className="list-disc">
                  <li>Design and prototyping of web and mobile applications</li>
                  <li>
                    Front-end programming: HTML5 / CSS / JavaScript / React /
                    Redux
                  </li>
                  <li>Back-end programming: Node.JS / Express</li>
                  <li>Database: Mongo DB</li>
                </ul>
              </>
            }
          />
          <Details
            type="Master 2 - Industries de Réseau et Économie Numérique"
            time="2021 - 2022"
            place="Université Paris Dauphine (PSL) - Paris, France"
            info="Master's degree jointly directed by Université Paris Dauphine (PSL), École Polytechnique, CentraleSupélec, Télécom Paris, Paris-Saclay University"
          />
          <Details
            type="Master 1 - Systèmes d’informations et économie numérique"
            time="2020 - 2021"
            place="Université Paris Dauphine (PSL) - Paris, France"
          />
          <Details
            type="École 42"
            time="2019 - 2021"
            place="École 19 (42 Network) - Brussels, Belgium"
            // TODO
            info="At School 42, I completed an intensive Fullstack Software Engineering program. This unique educational experience emphasized hands-on learning and collaboration within a peer-to-peer environment. The curriculum focused on developing essential programming skills and problem-solving abilities through engaging projects and real-world challenges. During my time at School 42, I gained a solid foundation in various programming languages, frameworks, and development methodologies. This experience not only sharpened my technical proficiency but also fostered valuable teamwork and adaptability skills."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
