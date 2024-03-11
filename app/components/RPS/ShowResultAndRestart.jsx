"use client"

import { GameContext } from "@/app/data/gameContext";
import { useContext } from "react";



export function ShowResultAndRestart() {
  const { result, playerPick, setScissors, setRock, setPaper, setPlayerPick } = useContext(GameContext);
  // TODO can setType be shortend and improved so its dynamic when other weapons are added?
  const setType =
  playerPick === "scissors"
    ? setScissors
    : playerPick === "rock"
    ? setRock
    : playerPick === "paper"
    ? setPaper
    : null;
  return (
    <div className="z-50 flex flex-col justify-center mx-8 [&>*]:animate-RPSPopUpResult">
      <h1 className="text-6xl text-center">
        {result === "WIN" || result === "LOSE" ? "YOU " : null}
        {result}
      </h1>
      <button
        className="z-50 p-2 px-10 m-8 tracking-widest text-red-600 bg-white h-fit w-fit text-md"
        onClick={() => {
          setType(false);
          setPlayerPick("")
        }}
      >
        PLAY AGAIN
      </button>
    </div>
  );
}

