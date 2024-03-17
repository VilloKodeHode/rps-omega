import { GameContext } from "@/app/data/gameContext";
import { ShowResultAndRestart } from "./TextResultAndRestart";
import { useContext } from "react";
import { ShowPickResult } from "./ShowPickResult";
export const RPSShowResult = () => {
  const { playerPick } = useContext(GameContext);
  return (
    <>
      <div>
        {playerPick && (
          <>
            <div className="z-40 flex h-full text-white align-top">
              <ShowPickResult playerOrComputer="player" />
              <ShowResultAndRestart />
              <ShowPickResult playerOrComputer="computer" />
            </div>
          </>
        )}
      </div>
    </>
  );
};
