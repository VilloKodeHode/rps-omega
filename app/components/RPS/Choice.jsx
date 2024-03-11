import { GameContext } from "@/app/data/gameContext";
import {
  EmptyGameButton,
  GameButton,
  WinnerGlow,
} from "../Buttons/GameButtons";
import { ComputerResult } from "./ComputerResult";
import { ShowResultAndRestart } from "./ShowResultAndRestart";
import { useEffect, useState, useContext } from "react";
import { PlayerResult } from "./PlayerResult";

export const Choice = () => {
  const { playerPick } = useContext(GameContext);
// TODO: check if this or RPSShowResult is needed

  return (
    <>
      {playerPick && (
        <>
          <div className="z-40 flex h-full text-white align-top">
            <PlayerResult />
            <ShowResultAndRestart />
            <ComputerResult />
          </div>
        </>
      )}
    </>
  );
};
