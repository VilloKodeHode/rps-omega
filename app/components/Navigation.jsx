"use client"

import Link from "next/link";
import { pagesData } from "../data/pagesData";

export const Navigation = () => {
  // const currentPath = window.location.pathname;
  // console.log(currentPath);
  return (
    <>
      <nav className="absolute z-40 grid gap-4 p-2 m-2 top-2 right-2 h-fit w-fit">
        {pagesData.map((page) => (
          <Link key={page.path} className="h-fit w-fit" href={`/${page.path}`}>
            <img
              className="w-16 h-16 p-2 rounded-xl opacity-80 bg-lightBlue"
              src={`/${page.src}`}
            />
          </Link>
        ))}

      </nav>
    </>
  );
};
