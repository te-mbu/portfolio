import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useState } from "react";

const Icons = ({ isMobile }) => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <div className="flex items-center justify-center flex-wrap mt-2">
      <motion.a
        href="https://github.com/te-mbu/"
        target="_blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="mr-3 sm:mx-1"
      >
        <AiFillGithub
          size={30}
          className={` ${
            isMobile ? "fill-light dark:fill-dark" : "fill-dark dark:fill-light"
          } `}
        />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/t%C3%A9rence-mbu-505434135/"
        target="_blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="mx-3 sm:mx-1"
      >
        <AiFillLinkedin size={30} color="#0A66C2" />
      </motion.a>
      {/* TODO */}
      <motion.a
        href="#"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="mx-3 sm:mx-1"
      >
        <AiOutlineMail
          size={30}
          className={` ${
            isMobile ? "fill-light dark:fill-dark" : "fill-dark dark:fill-light"
          } `}
        />
      </motion.a>
      <motion.button
        className="ml-3 sm:mx-1"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
      >
        {mode === "dark" ? (
          <MdLightMode
            size={30}
            className={` sm:mx-1 ${
              isMobile
                ? "fill-light dark:fill-dark"
                : "fill-dark dark:fill-light"
            } `}
          />
        ) : (
          <MdDarkMode
            size={30}
            className={` sm:mx-1 ${
              isMobile
                ? "fill-light dark:fill-dark"
                : "fill-dark dark:fill-light"
            } `}
          />
        )}
      </motion.button>
    </div>
  );
};

export default Icons;
