import React from "react";
import Image from "next/image";
import Link from "next/link";

const Article = ({ topic, title, author, href }) => {
  const fullHref = `/articles/${href}`;
  return (
    <div className="flex flex-col gap-3 col-span-2">
      <div className="relative aspect-video w-full">
        <Link href={fullHref}>
          <Image
            src="/images/projects/studioa3.jpg"
            fill
            className="rounded-xl"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-dark/75 dark:text-light/75">{topic}</p>
        <Link href={fullHref}>
          <p className="uppercase font-semibold tracking-wider text-xl text-primary dark:text-primaryDark">
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

export default Article;
