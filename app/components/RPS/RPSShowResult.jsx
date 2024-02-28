import { GameContext } from "@/app/data/gameContext";
import {
  EmptyGameButton,
  InactiveGameButton,
  ResultandRestart,
  WinnerGlow,
} from "./RPScomponents";
import { useEffect, useState, useContext } from "react";
import { GameButton } from "../Buttons/GameButtons";
import { ComputerResult } from "./ComputerResult";
import { Choice } from "./Choice";
export const RPSShowResult = () => {
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
  return (
    <div className="">
      {playerPick === "paper" && (
        <>
          <div className="z-40 flex h-full text-white align-top">
            <div className="">
              <h1 className="z-50 m-8 text-3xl">You picked</h1>
              {computerPick === "paper" || computerPick === "scissors" ? (
                <>
                  <div className="relative">
                    <EmptyGameButton />

                    <div className="[&>*]:animate-fallDown">
                      <GameButton weapon={playerPick} />
                    </div>
                  </div>
                </>
              ) : null}
              {computerPick === "rock" && (
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
              )}
            </div>
            <ResultandRestart
              setType={setPaper}
              setPlayerPick={setPlayerPick}
              result={result}
            />
            <ComputerResult />
          </div>
        </>
      )}

      {playerPick === "scissors" && (
        <>
          <div className="z-40 flex h-full text-white align-top">
            <div className="">
              <h1 className="m-8 text-3xl">You picked</h1>

              {computerPick === "rock" || computerPick === "scissors" ? (
                <div className="relative">
                  <EmptyGameButton />

                  <div className="[&>*]:animate-fallDown">
                    <GameButton weapon={playerPick} />
                  </div>
                </div>
              ) : null}

              {computerPick === "paper" && (
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
              )}
            </div>
            <ResultandRestart
              setPlayerPick={setPlayerPick}
              setType={setScissors}
              result={result}
            />
            <ComputerResult />
          </div>
        </>
      )}

      {playerPick === "rock" && (
        <>
          <div className="z-40 flex h-full text-white align-top">
            <div className="">
              <h1 className="m-8 text-3xl">You picked</h1>

              {computerPick === "rock" || computerPick === "paper" ? (
                <div className="relative">
                  <EmptyGameButton />

                  <div className="[&>*]:animate-fallDown">
                    <GameButton weapon={playerPick} />
                  </div>
                </div>
              ) : null}
              {computerPick === "scissors" && (
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
              )}
            </div>
            <ResultandRestart
              setType={setRock}
              setPlayerPick={setPlayerPick}
              result={result}
            />
            <ComputerResult />
          </div>
        </>
      )}

      {/* {paper || rock || scissors ? (
        <>
          <ResultandRestart
            setType={
              computerPick === "rock"
                ? setRock
                : computerPick === "scissors"
                ? setScissors
                : computerPick === "paper"
                ? setPaper
                : null
            }
            result={result}
          />
          <ComputerResult />
        </>
      ) : null} */}
    </div>
  );
};
