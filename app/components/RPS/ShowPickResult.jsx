import { GameContext } from "@/app/data/gameContext";
import { useContext } from "react";
import { ButtonShadow, GameButton, WinnerGlow } from "../Buttons/GameButtons";


export const ShowPickResult = ({ playerOrComputer }) => {
  const { result, playerPick, computerPick } = useContext(GameContext);
  const isPlayer = playerOrComputer === "player";
  return (
    <div className="z-40">
      <h1 className="z-50 m-8 text-3xl">
        {isPlayer ? "You" : "Computer"} picked
      </h1>
      <div className="relative z-40 m-auto w-fit">
        <ButtonShadow playerOrComputer={playerOrComputer} />
        {(result === "WIN" && isPlayer) || (result === "LOSE" && !isPlayer) ? (
          <div className="[&>*]:animate-RPSPopUpDelayed">
            <WinnerGlow />
          </div>
        ) : null}
        <div
          className={`${
            isPlayer
              ? "[&>*]:animate-fallDown"
              : "[&>*]:animate-fallDownDelayed"
          }`}
        >
          <GameButton weapon={isPlayer ? playerPick : computerPick} />
        </div>
      </div>
    </div>
  );
};
