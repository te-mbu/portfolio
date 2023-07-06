import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import { motion } from "framer-motion";

const Icons = () => {
  return (
    <div className="flex items-center justify-center flex-wrap">
      <motion.a href="https://github.com/te-mbu/" target="_blank" whileHover={{y: -2}} whileTap={{scale:0.9}} className="mr-3">
        <AiFillGithub size={30} color="#1B1B1B"/>
      </motion.a>
      <motion.a href="https://www.linkedin.com/in/t%C3%A9rence-mbu-505434135/" target="_blank" whileHover={{y: -2}} whileTap={{scale:0.9}} className="mx-3">
        <AiFillLinkedin size={30} color="#0A66C2" />
      </motion.a>
      {/* TODO */}
      <motion.a href="#" whileHover={{y: -2}} whileTap={{scale:0.9}} className="ml-3">
        <AiOutlineMail size={30} color="#1B1B1B" />
      </motion.a>
    </div>
  );
};

export default Icons;
