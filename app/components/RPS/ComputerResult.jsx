"use client";

import { GameContext } from "@/app/data/gameContext";
import { useContext } from "react";
import {
  EmptyGameButton,
  GameButton,
  WinnerGlow,
} from "../Buttons/GameButtons";


export const ComputerResult = () => {
  const { result, computerPick } = useContext(GameContext);
  return (
    <div className="z-40">
      <h1 className="z-40 m-8 text-3xl">House picked</h1>
      <div className="relative m-auto w-fit">
        <EmptyGameButton playerOrComputer="computer" />
        <div className="[&>*]:animate-fallDownDelayed">
            <div className="relative m-auto rounded-full w-fit">
          {result === "LOSE" ? (
              <div className="[&>*]:animate-RPSPopUpDelayed">
                <WinnerGlow />
              </div>
                ) : null}
              <div className="[&>*]:animate-fallDown">
                <GameButton weapon={computerPick} />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
