import { GameContext } from "@/app/data/gameContext";
import { ShowResultAndRestart } from "./ShowResultAndRestart";
import { useContext } from "react";
import { ComputerResult } from "./ComputerResult";
import { PlayerResult } from "./PlayerResult";
export const RPSShowResult = () => {
  const { playerPick } = useContext(GameContext);

  return (
    <>
      <div>
        {playerPick && (
          <>
            <div className="z-40 flex h-full text-white align-top">
              <PlayerResult />
              <ShowResultAndRestart />
              <ComputerResult />
            </div>
          </>
        )}
      </div>
    </>
  );
};
