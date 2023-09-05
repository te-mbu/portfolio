import React from "react";
import Image from "next/image";
import Link from "next/link";

const MainArticle = ({ topic, title, author, href }) => {
  const fullHref = `/articles/${href}`;
  return (
    <div className="col-span-4 sm:col-span-2 flex flex-row md:flex-col md:gap-3 gap-8">
      <div className="relative aspect-video md:w-full w-4/6">
        <Link href={fullHref}>
          <Image src="/images/projects/studioa3.jpg" fill className="" />
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-dark/75 dark:text-light/75">{topic}</p>
        <Link href={fullHref}>
          <p className="uppercase font-semibold tracking-wider text-2xl md:text-xl text-primary dark:text-primaryDark">
            {title}
          </p>
        </Link>
        <p className="text-sm font-semibold tracking-wide dark:text-light">
          By {author}
        </p>
      </div>
    </div>
  );
};

export default MainArticle;
