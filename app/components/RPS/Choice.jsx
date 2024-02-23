import { GameContext } from "@/app/data/gameContext";
import { GameButton } from "../Buttons/GameButtons";
import { ComputerResult } from "./ComputerResult";
import { ResultandRestart, WinnerGlow } from "./RPScomponents";
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
  return (
    <>
      {playerPick && (
        <>
          <div className="flex h-full align-top z-40 text-white">
            <div className="[&>*]:animate-RPSPopUp">
              <h1 className="m-8 text-3xl">You picked</h1>

              {playerPick === "scissors" ? (
                computerPick === "rock" || computerPick === "scissors" ? (
                  <GameButton disabled={true} weapon={playerPick} />
                ) : null
              ) : playerPick === "rock" ? (
                computerPick === "scissors" || computerPick === "rock" ? (
                  <GameButton disabled={true} weapon={playerPick} />
                ) : null
              ) : playerPick === "paper" ? (
                computerPick === "rock" || computerPick === "paper" ? (
                  <GameButton disabled={true} weapon={playerPick} />
                ) : null
              ) : null}

              {(playerPick === "scissors" && computerPick === "paper") ||
              (playerPick === "rock" && computerPick === "scissors") ||
              (playerPick === "paper" && computerPick === "rock") ? (
                <>
                  <div className="rounded-full w-fit m-auto relative z-40">
                    <div className="[&>*]:animate-RPSPopUpDelayed">
                      <WinnerGlow />
                    </div>
                    <GameButton disabled={true} weapon={playerPick} />
                  </div>
                </>
              ) : null}
            </div>
            <ResultandRestart
              setType={
                playerPick === "scissors"
                  ? setScissors
                  : playerPick === "rock"
                  ? setRock
                  : playerPick === "paper"
                  ? setPaper
                  : null
              }
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
