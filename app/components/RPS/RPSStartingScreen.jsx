"use client";

import { GameContext } from "@/app/data/gameContext";
import { useContext } from "react";
import { ActiveGameButton } from "../Buttons/GameButtons";
import PlayRound from "@/app/logic/GameLogic";

export const StartingScreen = () => {
  const {
    paper,
    setPaper,
    scissors,
    setScissors,
    rock,
    setRock,
    setComputerPick,
    setPlayerPick,
    setScore,
    setResult,
    setRound,
  } = useContext(GameContext);

  const handlePlayRound = (weapon) => {
    setRound((round) => round + 1);
    setPlayerPick(weapon);
    PlayRound({ setComputerPick, setScore, setResult }, weapon);
  };

  return (
    <>
      {paper || scissors || rock || (
        <>
          <div className="relative z-20 flex items-center justify-center w-full h-full">
            <div className="flex flex-wrap justify-center w-[550px] gap-32 items-center">
              <ActiveGameButton
                setWeapon={setPaper}
                weapon="paper"
                handleButtonClick={handlePlayRound}
              />

              <ActiveGameButton
                setWeapon={setScissors}
                weapon="scissors"
                handleButtonClick={handlePlayRound}
              />

              <ActiveGameButton
                setWeapon={setRock}
                weapon="rock"
                handleButtonClick={handlePlayRound}
              />
            </div>
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 -z-10">
              <img src="/bg-triangle.svg" />
            </div>
          </div>
        </>
      )}
    </>
  );
};
