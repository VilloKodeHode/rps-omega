import { GameContext } from "@/app/data/gameContext";
import { useContext } from "react";
import {
  EmptyGameButton,
  GameButton,
  WinnerGlow,
} from "../Buttons/GameButtons";

export const PlayerResult = () => {
  const { result, playerPick } = useContext(GameContext);
  return (
    <div className="z-40">
      <h1 className="z-50 m-8 text-3xl">You picked</h1>
      <>
        <div className="relative z-40 m-auto w-fit">
          <EmptyGameButton />
          {result === "WIN" ? (
            <div className="[&>*]:animate-RPSPopUpDelayed">
              <WinnerGlow />
            </div>
          ) : null}
          <div className="[&>*]:animate-fallDown">
            <GameButton weapon={playerPick} />
          </div>
        </div>
      </>
    </div>
  );
};
