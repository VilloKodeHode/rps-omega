import { GameContext } from "@/app/data/gameContext";
import {
  EmptyGameButton,
  GameButton,
  WinnerGlow,
} from "../Buttons/GameButtons";
import { ComputerResult } from "./ComputerResult";
import { ResultandRestart } from "./RPScomponents";
import { useEffect, useState, useContext } from "react";

export const Choice = () => {
  const {
    paper,
    setPaper,
    scissors,
    setScissors,
    rock,
    setRock,
    computerPick,
    result,
    playerPick,
    setPlayerPick,
  } = useContext(GameContext);
  const setTypeHandler =
    playerPick === "scissors"
      ? setScissors
      : playerPick === "rock"
      ? setRock
      : playerPick === "paper"
      ? setPaper
      : null;

  // const setTypeHandler = "set" + playerPick;

  return (
    <>
      {playerPick && (
        <>
          <div className="z-40 flex h-full text-white align-top">
            <div className="">
              <h1 className="z-50 m-8 text-3xl">You picked</h1>
              {result === "WIN" ? (
                <>
                  <div className="relative z-40 m-auto rounded-full w-fit">
                    <EmptyGameButton />
                    <div className="[&>*]:animate-RPSPopUpDelayed">
                      <WinnerGlow />
                    </div>
                    <div className="[&>*]:animate-fallDown">
                      <GameButton weapon={playerPick} />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="relative">
                    <EmptyGameButton />

                    <div className="[&>*]:animate-fallDown">
                      <GameButton weapon={playerPick} />
                    </div>
                  </div>
                </>
              )}
            </div>
            <ResultandRestart
              setType={setTypeHandler}
              setPlayerPick={setPlayerPick}
              result={result}
            />
            <ComputerResult />
          </div>
        </>
      )}
    </>
  );
};
