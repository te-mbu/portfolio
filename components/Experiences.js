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
        Expériences
      </h2>
      <div ref={ref} className="w-full mx-auto relative mt-14">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
          <Details
            position="Développeur React"
            company="@Kaspr"
            companyLink="https://www.kaspr.io/"
            time="2024 - Aujourd'hui"
            address="Paris, France"
            work={
              <>
                <div className="mb-4">
                  <br />
                  <p>
                    Kaspr (groupe Cognism) est une plateforme de prospection.
                    Avec une base de données de plus de 500 millions de numéros
                    et emails, Kaspr facilite l&apos;accès aux coordonnées des
                    contacts. Utilisée par 50 000 entreprises et comptant plus
                    de 100 000 utilisateurs actifs, Kaspr s&apos;impose comme
                    une solution de choix dans son domaine.
                  </p>
                </div>
                <ul className="list-disc space-y-2">
                  <li>
                    Développement, test et maintenance de solutions front-end
                    avec React.js.
                  </li>
                  <li>
                    Développement de nouvelles fonctionnalités et amélioration
                    du code existant.
                  </li>
                  <li>
                    Développement et maintenance de composants d&apos;interface
                    utilisateur réutilisables, assurant la cohérence visuelle
                    sur l&apos;ensemble de la plateforme.
                  </li>
                  <li>
                    Travailler en étroite collaboration avec les chefs de projet
                    (PM), les développeurs backend et les designers pour assurer
                    une mise en œuvre efficace des fonctionnalités.
                  </li>
                  <li>
                    Intégration de maquettes Figma avec un souci du détail pour
                    obtenir un résultat Pixel perfect.
                  </li>
                  <li>
                    Création et mise à jour de la documentation technique.
                  </li>
                </ul>
                <br />
                <p className="underline">Technologies:</p>
                <ul className="list-disc">
                  <li>Javascript, React, Redux</li>
                  <li>Github, Gitlab, Git</li>
                </ul>
              </>
            }
          />
          <Details
            position="Développeur React"
            company="@Freelance"
            time="2023"
            companyLink="https://www.kaspr.io/fr/"
            address="Paris, France"
            work={
              <>
                <br />
                <p>
                  Kaspr (groupe Cognism) est une plateforme de prospection. Avec
                  une base de données de plus de 500 millions de numéros et
                  emails, Kaspr facilite l&apos;accès aux coordonnées des
                  ocntacts. Utilisée par 50 000 entreprises et comptant plus de
                  100 000 utilisateurs actifs, Kaspr s&apos;impose comme une
                  solution de choix dans son domaine.
                </p>
                <br />
                <ul className="list-disc">
                  <li>
                    Développement, test et maintenance de solutions front-end
                    avec React.js
                  </li>
                  <li>
                    Développement de nouvelles fonctionnalités et amélioration
                    du code existant.
                  </li>
                  <li>
                    Développement et maintenance de composants d&apos;interface
                    utilisateur réutilisables, assurant la cohérence visuelle
                    sur l&apos;ensemble de la plateforme.
                  </li>
                  <li>
                    Travailler en étroite collaboration avec les chefs de projet
                    (PM), les développeurs backend et les designers pour assurer
                    une mise en œuvre efficace des fonctionnalités.
                  </li>
                  <li>
                    Intégration de maquettes Figma avec un souci du détail pour
                    obtenir un résultat Pixel perfect.
                  </li>
                  <li>
                    Création et mise à jour de la documentation technique.
                  </li>
                </ul>
                <br />
                <p className="underline">Technologies:</p>
                <ul className="list-disc">
                  <li>React, Javascript, Redux, Jest, React Testing Library</li>
                  <li>Gitlab, Git</li>
                </ul>
              </>
            }
          />
          <Details
            position="Développer FullStack"
            company="@Vade Secure"
            companyLink="https://www.vadesecure.com/fr/"
            time="2020 - 2022"
            address="Paris, France"
            work={
              <>
                <br />
                <p>
                  Vade est une entreprise mondiale de cybersécurité spécialisée
                  dans le développement de solutions de sécurité de l&apos;email
                  collaborative. Combinant l&apos;intelligence humaine et
                  l&apos;intelligence artificielle, les solutions de Vade
                  forment une alliance de cybersécurité alimentée par l&apos;IA
                  et améliorée par les personnes.{" "}
                </p>
                <br />
                <p>
                  Vade protège plus de 1.4 milliard de boîte email, analyse 100
                  milliards emails par jour et travaille avec plus de 18000
                  clients depuis ses 8 bureaux dans le monde.
                </p>

                <br />
                <ul className="list-disc">
                  <li>
                    Développement d&apos;une application générateur
                    d&apos;emails, visant à faciliter l&apos;envoi de courriers
                    électroniques &apos;from scratch&apos; ou à partir
                    d&apos;une base de données.
                  </li>
                  <li>
                    Conception et développement de l&apos;interface utilisateur.
                  </li>
                  <li>Création d&apos;APIs à l&apos;aide de FastAPI.</li>
                  <li>
                    Développement de solutions de scraping Web robustes à
                    l&apos;aide de Python et BeautifulSoup pour extraire des
                    données provenant de diverses sources.
                  </li>
                  <li>
                    Mise en place de tests complets à l&apos;aide de
                    Pytest/Cypress, garantissant un code fonctionnel fiable et
                    exempt d&apos;erreurs.
                  </li>
                  <li>
                    Développement et mise en place de procédures de contrôle
                    qualité et de normes visant à assurer la qualité des
                    produits/services.
                  </li>
                </ul>
                <br />
                <span className="underline">Technologies:</span>
                <p>
                  Python, Javascript, HTML, CSS, Fastapi, BeautifulSoup,
                  Cucumber, Cypress
                </p>
              </>
            }
          />
          <Details
            position="Stagiaire Ingénieur logiciel"
            company="@Komit"
            companyLink="https://komit-consulting.com/"
            time="2018 - 2019"
            address="Hô-Chi-Minh, Vietnam"
            work={
              <>
                <br />
                <p>
                  KomIT Consulting est une entreprise de conseil stratégique et
                  technologique majeure, axée sur les technologies de
                  l&apos;information et des communications et est spécialisée
                  notamment dans la sécurité informatique, le développement web
                  et les stratégies marketing.
                </p>
                <br />
                <ul className="list-disc">
                  <li>Initiation au développement ERP - Odoo</li>
                  <li>
                    Maîtrise modérée du développement d&apos;applications
                    mobiles.
                  </li>
                </ul>
                <br />
                <span className="underline">Technologies:</span>
                <p>Javascript, HTML, CSS, Git, Github</p>
              </>
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experiences;
