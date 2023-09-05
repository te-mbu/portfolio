import React from "react";
import Image from "next/image";

const Article = () => {
  return (
    <div className="flex flex-col gap-3 ">
      <div className="relative aspect-video w-full">
        <Image src="/images/projects/studioa3.jpg" fill className="" />
      </div>
      <p className="text-dark/75 dark:text-light/75">Illustration</p>
      <p className="uppercase font-semibold tracking-wider text-xl text-primary dark:text-primaryDark">
        Japan house opens in mountainside to foster peak creativity
      </p>
      <p className="text-sm font-semibold tracking-wide dark:text-light">
        By Térence MBU
      </p>
    </div>
  );
};

export default Article;
