import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span className="text-dark dark:text-light">
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>
        <div className="flex items-center text-dark dark:text-light lg:p-2">
          Built With{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          by&nbsp;
          <Link
            href="mailto:mbu.terence@gmail.com"
            target="_blank"
            className="underline underline-offset-2"
          >
            Térence MBU
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
