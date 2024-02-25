import { GameContext } from "@/app/data/gameContext";
import { useContext } from "react";
import { EmptyGameButton, WinnerGlow } from "./RPScomponents";
import { GameButton } from "../Buttons/GameButtons";


export const ComputerResult = ({}) => {
  const { result, computerPick } = useContext(GameContext);
  return (
    <div className="relative z-40">
      <h1 className="m-8 text-3xl">House picked </h1>
      <div className="relative m-auto w-fit">
        <EmptyGameButton />
        <div className="[&>*]:animate-RPSPopUpDelayed">
          {result === "WIN" || result === "DRAW" ? (
            <GameButton weapon={computerPick} />
          ) : (
            <div className="relative m-auto rounded-full w-fit">
              <WinnerGlow />
              <GameButton weapon={computerPick} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
