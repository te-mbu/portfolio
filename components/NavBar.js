import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Icons from "./Icons";
import { useRouter } from "next/router";

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter()
    return (
        <Link href={href} className={`${className} text-dark dark:text-light relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full": "w-0"}`}>&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4"/>
        <CustomLink href="/about" title="About" className="mx-4"/>
        <CustomLink href="/projects" title="Projects" className="ml-4"/>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">

      <Logo />
      </div>
        <Icons/>
    </header>
  );
};

export default NavBar;
