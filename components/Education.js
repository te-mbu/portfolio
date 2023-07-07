import React from "react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
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
      <h2 className="text-3xl font-bold border-b-4 border-dark/75 inline text-dark/75">
        Education
      </h2>
      <div ref={ref} className="w-full mx-auto relative mt-14">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 ">
          <Details
            type="Web and Mobile Fullstack Coding Bootcamp"
            time="2023"
            place="La Capsule - Paris, France"
            info="10-week coding bootcamp - Web and Mobile Fullstack JavaScript Developer

            
            • Design and prototyping of web and mobile applications
            • Front-end programming: HTML5 / CSS / JavaScript / React / Redux
            • Back-end programming: Node.JS / Express
            • Database: Mongo DB
            • Workflow: Git / Github"
          />
          <Details
            type="Master 2 - Industries de Réseau et Économie Numérique"
            time="2021 - 2022"
            place="Université Paris Dauphine (PSL) - Paris, France"
            info="Master's degree jointly directed by Paris Dauphine University, École Polytechnique, CentraleSupélec, Télécom Paris, Paris-Saclay University"
          />
          <Details
            type="Master 1 - Systèmes d’informations et économie numérique"
            time="2020 - 2021"
            place="Université Paris Dauphine (PSL) - Paris, France"
          />
          <Details
            type="École 42"
            time="2019 - 2020"
            place="École 19 (42 Network) - Brussels, Belgium"
            // TODO
            info=""
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
