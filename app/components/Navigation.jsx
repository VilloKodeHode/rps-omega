"use client"

import Link from "next/link";
import { gamesData } from "../data/pagesData";
import { useContext, useEffect } from "react";
import { GameContext } from "../data/gameContext";

export const Navigation = () => {
  const {
        gameType,
    setGameType
  } = useContext(GameContext);
  
  useEffect(() => {
    setGameType("RPS")
    console.log("game type is: ", gameType)
  }, []);
  return (
    <>
      <nav className="absolute z-40 grid gap-4 p-2 m-2 top-2 right-2 h-fit w-fit">
        {gamesData.map((data) => (
          <button key={data.name} className="h-fit w-fit" onClick={() => setGameType(data.game)}>
            <img
              className="w-16 h-16 p-2 rounded-xl opacity-80 bg-lightBlue"
              src={`/${data.src}`}
            />
          </button>
        ))}

      </nav>
    </>
  );
};
