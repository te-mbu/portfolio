import React from "react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null)
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
        <LiIcon reference={ref} />
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl text-dark dark:text-light">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            {company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-dark dark:text-light">{work}</p>
      </motion.div>
    </li>
  );
};

const Experiences = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });

  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold border-b-4 border-dark/75 dark:border-light/75 inline text-dark/75 dark:text-light/75">
        Experiences
      </h2>
      <div ref={ref} className="w-full mx-auto relative mt-14">
        <motion.div 
        style={{scaleY: scrollYProgress}}
        className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top" />
        <ul className="w-full flex flex-col items-start justify-between ml-4 ">
          <Details
            position="Freelance Fullstack Web Developer"
            time="2023 - Present"
            address="Paris, France"
            work="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <Details
            position="Software QA Engineer"
            company="@Vade Secure"
            companyLink="https://www.vadesecure.com/fr/"
            time="2020 - 2022"
            address="Paris, France"
            work="o Build a mail generator that allows to send emails from scratch or from a mail database.

Key features:
- Easy to use: Developed to be intuitive and easy to use for the final users.
- Customizable: Many personalization options to generate and send customized emails

- Build mail generator user interface using Javacript, HTML, CSS
- Build API using Fastapi
- Web scraping solutions development to parse data using Python and BeautifulSoup
- Creating module tests and unit tests using Pytest
- Implementation of functional tests in Python.
- Asynchronous programming
- Set up the CLI App using Python and Typer
- Documentation using Mkdocs

Project management and environment:
- Git / Gitlab
- Gitlab runners (CI/CD)
- Pre-commit hook (flake8, mypy, black)
 - Linux system (Ubuntu 20)


Technologies used: Python, Javascript, HTML, CSS, Fastapi, Gitlab, Gitlab CI, BeautifulSoup

o QA

- API testing
- Reporting issues using Jira and monitoring the status
- Cucumber
- Cypress"
          />
          <Details
            position="Software Developer Intern"
            company="@Komit"
            companyLink="https://komit-consulting.com/"
            time="2018 - 2019"
            address="Hô-Chi-Minh, Vietnam"
            work="- Introduction to erp development (Odoo platform)
            - Mobile app development (Angular)"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experiences;
