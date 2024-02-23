import { GameContext } from "@/app/data/gameContext";
import {useContext } from "react";
import { EmptyGameButton, WinnerGlow } from "./RPScomponents";
import { GameButton } from "../Buttons/GameButtons";

export const ComputerResult = ({}) => {
    const {computerPick,
 } = useContext(GameContext)
  return (
    <div className="z-40">
      <h1 className="m-8 text-3xl">House picked </h1>
      <div className="relative">
        <EmptyGameButton />
        <div className="[&>*]:animate-RPSPopUpDelayed">
          {computerPick === "rock" && (
            <GameButton disabled={true} weapon="rock" />
          )}
          {computerPick === "paper" && (
            <GameButton disabled={true} weapon="paper" />
          )}
          {computerPick === "scissors" && (
            <div className="rounded-full w-fit m-auto relative">
              <WinnerGlow />
              <GameButton disabled={true} weapon="scissors" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
