import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span className="text-dark dark:text-light">{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center text-dark dark:text-light">
          Build With <span className="text-primary text-2xl px-1">&#9825;</span>by&nbsp;<Link href="/" className="underline underline-offset-2">Térence MBU</Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
