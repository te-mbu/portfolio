import React from "react";
import Image from "next/image";

const Stack = () => {
  const stack = [
    {
      id: 1,
      src: "html.png",
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: "css.png",
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: "javascript.png",
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: "react.png",
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: "node.png",
      title: "Node",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: "tailwind.png",
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: "github.png",
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: "nextjs.png",
      title: "Next",
      style: "shadow-gray-500",
    },
    {
      id: 9,
      src: "reduxx.png",
      title: "Redux",
      style: "shadow-violet-500",
    },
  ];
  return (
    <div className=" w-full mt-24">
      <div className=" mx-auto flex flex-col justify-center w-full h-full text-light dark:text-dark">
        <div className="w-full flex flex-col justify-center items-start">
          <p className="text-3xl font-bold border-b-4 border-dark/75 dark:border-light/75 inline text-dark/75 dark:text-light/75 lg:text-2xl">
            Tech Stack
          </p>
          <p className="py-6 text-dark dark:text-light font-medium">
            These are the technologies I&apos;ve worked with :
          </p>
        </div>
        <div className="w-full max-w-7xl grid grid-cols-3 md:grid-cols-2 place-items-center gap-8 text-center m-auto">
          {stack.map((data, i) => (
            <div
              key={data.id}
              className={`shadow-md w-full max-w-[200px] hover:scale-105 duration-500 py-2 rounded-lg ${data.style}`}
            >
              <div className="relative w-20 h-20 aspect-square mx-auto">
                <Image
                  src={`/images/stack/${data.src}`}
                  alt={data.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-dark dark:text-light font-medium">{data.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stack;
