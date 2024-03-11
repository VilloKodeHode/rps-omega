"use client";

import { GameContext } from "@/app/data/gameContext";
import Image from "next/image";
import { useContext } from "react";

export const RPSSplashScreen = () => {
  const { weaponData } = useContext(GameContext);

  return (
    <>
      {/* {!weaponData && ( */}
      <div className={`absolute z-50 w-screen h-screen origin-left translate-x-1/2 -translate-y-1/2 top-1/2 -left-1/2 ${
            weaponData ? "animate-splashScreenFade" : null
          }`}>
        <div
          className={`splashScreen  flex flex-col items-center justify-center bg-black w-full h-full overflow-hidden  gap-16  `}
        >
          {/* //TODO Make this dynamic so the other logoes will show up as well (when changing url?) */}
          <Image
            src="/logo.svg"
            alt="logo"
            width={200}
            height={200}
            priority
            className="w-1/3 min-w-[250px] h-auto"
          />
          <span className="text-white text-[50px]">Loading...</span>
        </div>
      </div>
      {/* )} */}
    </>
  );
};
