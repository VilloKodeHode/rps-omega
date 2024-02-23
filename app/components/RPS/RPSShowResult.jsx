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
    <div className="animate-RPSPopUp">
        {/* <Choice/> */}
      {paper && (
        <>
          <div className="flex h-full align-top z-40 text-white">
            <div className="[&>*]:animate-RPSPopUp">
              <h1 className="m-8 text-3xl">You picked</h1>
              {computerPick === "paper" || computerPick === "scissors" ? (
                <>
                  <GameButton disabled={true} weapon="paper" />
                </>
              ) : null}
              {computerPick === "rock" && (
                <>
                  <div className="rounded-full w-fit m-auto relative z-40">
                    <div className="[&>*]:animate-RPSPopUpDelayed">
                      <WinnerGlow />
                    </div>
                    <GameButton disabled={true} weapon="paper" />
                  </div>
                </>
              )}
            </div>
            <ResultandRestart setType={setPaper} setPlayerPick={setPlayerPick} result={result} />
            <ComputerResult />
          </div>
        </>
      )}

      {scissors && (
        <>
          <div className="flex h-full align-top z-40 text-white">
            <div className="[&>*]:animate-RPSPopUp">
              <h1 className="m-8 text-3xl">You picked</h1>

              {computerPick === "rock" || computerPick === "scissors" ? (
                <GameButton disabled={true} weapon="scissors" />
              ) : null}

              {computerPick === "paper" && (
                <>
                  <div className="rounded-full w-fit m-auto relative z-40">
                    <div className="[&>*]:animate-RPSPopUpDelayed">
                      <WinnerGlow />
                    </div>
                    <GameButton disabled={true} weapon="scissors" />
                  </div>
                </>
              )}
            </div>
            <ResultandRestart setPlayerPick={setPlayerPick} setType={setScissors} result={result} />
            <ComputerResult />
          </div>
        </>
      )}

      {rock && (
        <>
          <div className="flex h-full align-top z-40 text-white">
            <div className="[&>*]:animate-RPSPopUp">
              <h1 className="m-8 text-3xl">You picked</h1>

              {computerPick === "rock" || computerPick === "paper" ? (
                <GameButton weapon="rock" />
              ) : null}
              {computerPick === "scissors" && (
                <>
                  <div className="rounded-full w-fit m-auto relative z-40">
                    <div className="[&>*]:animate-RPSPopUpDelayed">
                      <WinnerGlow />
                    </div>
                    <GameButton weapon="rock" />
                  </div>
                </>
              )}
            </div>
            <ResultandRestart setType={setRock} setPlayerPick={setPlayerPick} result={result} />
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
