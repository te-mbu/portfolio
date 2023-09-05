import React from "react";
import Image from "next/image";

const Article = () => {
  return (
    <div className="first:col-span-3 first:md:col-span-2 first:sm:col-span-1 flex flex-col first:flex-row first:gap-8 md:first:flex-col gap-3">
      <div className="relative aspect-video w-full">
        <Image src="/images/projects/studioa3.jpg" fill className="" />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-dark/75 dark:text-light/75">Illustration</p>
        <p className="uppercase font-semibold tracking-wider text-xl text-primary dark:text-primaryDark">
          Japan house opens in mountainside to foster peak creativity
        </p>
        <p className="text-sm font-semibold tracking-wide dark:text-light">
          By Térence MBU
        </p>
      </div>
    </div>
  );
};

export default Article;
