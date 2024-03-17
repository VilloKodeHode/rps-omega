"use client";

import { GameContext } from "@/app/data/gameContext";
import { capitalize } from "@/app/data/utils";
import { useContext } from "react";

export function ShowResultAndRestart() {
  const { result, playerPick, setPlayerPick, resultText, setComputerPick } =
    useContext(GameContext);

  const setType = GameContext._currentValue["set" + capitalize(playerPick)];

  return (
    <div className="z-50 flex flex-col h-[300px] items-center justify-between mx-8 [&>*]:animate-RPSPopUpResult">
      <p className="text-3xl w-[230px] italic text-center ">{resultText}</p>
      <div className="flex flex-col items-center justify-center gap-8">
        <span className="text-6xl text-center">
          {result === "WIN" || result === "LOSE" ? "YOU " : null}
          {result}
        </span>
        <button
          className="z-50 p-2 px-10 tracking-widest text-red-600 bg-white h-fit w-fit text-md"
          onClick={() => {
            setType(false);
            setPlayerPick("");
            setComputerPick("");
          }}
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
}
