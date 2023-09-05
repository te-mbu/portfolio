import React from "react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            {company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-dark dark:text-light md:text-sm">
          {work}
        </p>
      </motion.div>
    </li>
  );
};

const Experiences = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold border-b-4 border-dark/75 dark:border-light/75 inline text-dark/75 dark:text-light/75 lg:text-2xl">
        Experiences
      </h2>
      <div ref={ref} className="w-full mx-auto relative mt-14">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
          <Details
            position="React Developer"
            company="@Freelance"
            time="2023 - Present"
            address="Paris, France"
            work={
              <>
                <br />
                <p>
                  I support my clients in the creation of their web application:
                </p>
                <br />
                <ul className="list-disc">
                  <li>
                    Designing and developing responsive and visually appealing
                    web applications using React, Tailwind CSS, and Next.js
                  </li>
                  <li>
                    Collaborating closely with clients to understand their
                    requirements and translate them into functional and elegant
                    websites.
                  </li>
                  <li>
                    Implementing front-end designs using modern frameworks
                    ensuring optimal performance
                  </li>
                  <li>
                    Providing ongoing website maintenance and support, including
                    bug fixes and updates.
                  </li>
                  <li>
                    Demonstrating strong problem-solving skills and the ability
                    to work independently while meeting project deadlines
                  </li>
                </ul>
                <br />
                <p>
                  My goal is to provide high quality web solutions that meet
                  each client&apos;s unique needs and provide an excellent user
                  experience.
                </p>
                <br />
                <p className="underline">Technologies:</p>
                <ul className="list-disc">
                  <li>Javascript, React, Tailwind, Next, Node</li>
                  <li>Github, Gitlab, Git</li>
                  <li>Unit test, TDD</li>
                </ul>
              </>
            }
          />
          <Details
            position="Fullstack Developer"
            company="@Vade Secure"
            companyLink="https://www.vadesecure.com/fr/"
            time="2020 - 2022"
            address="Paris, France"
            work={
              <>
                <br />
                <p>
                  Vade is a global cybersecurity company specializing in the
                  development of collaborative email security solutions.
                  Combining human intelligence and artificial intelligence,
                  Vade&apos;s solutions form an AI-powered, people-enhanced
                  cybersecurity alliance.
                </p>
                <br />
                <p>
                  Vade protects more than 1.4 billion mailboxes, analyzes 100
                  billion emails per day and works with more than 18,000
                  customers from its 8 offices around the world.
                </p>

                <br />
                <ul className="list-disc">
                  <li>
                    Developed an email generator application, aiming to
                    facilitate the sending of emails &quot;from scratch&quot; or
                    from a database
                  </li>
                  <li>User interface design and development</li>
                  <li>
                    Built APIs using FastAPI to facilitate seamless
                    communication between various system components
                  </li>
                  <li>
                    Developed robust web scraping solutions using Python and
                    BeautifulSoup to extract and parse data from diverse sources
                  </li>
                  <li>
                    Implemented comprehensive module tests and unit tests using
                    Pytest/Cypress, ensuring reliable and error-free code
                    functionality
                  </li>
                  <li>
                    Development and implementation of quality control procedures
                    and standards aimed at ensuring the quality of
                    products/services.
                  </li>
                </ul>
                <br />
                <span className="underline">Technologies:</span>
                <p>
                  Python, Javascript, HTML, CSS, Fastapi, BeautifulSoup,
                  Cucumber, Cypress
                </p>
                <br />
                <span className="underline">
                  Project management and environment:
                </span>
                <br />
                <ul className="list-disc">
                  <li>Git / Gitlab - Gitlab runners (CI/CD)</li>
                  <li>Linux system (Ubuntu 20)</li>
                </ul>
              </>
            }
          />
          <Details
            position="Software Developer Intern"
            company="@Komit"
            companyLink="https://komit-consulting.com/"
            time="2018 - 2019"
            address="Hô-Chi-Minh, Vietnam"
            work={
              <>
                <br />
                <ul className="list-disc">
                  <li>
                    Developed expertise in ERP development, specializing in the
                    Odoo platform, to create reliable and scalable enterprise
                    solutions
                  </li>
                  <li>
                    Obtained a moderate proficiency in mobile app development
                    using Angular
                  </li>
                </ul>
              </>
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experiences;
