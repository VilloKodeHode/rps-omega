import { GameContext, useGameContext } from "@/app/data/gameContext";
import { useContext } from "react";
import { GameButton } from "../Buttons/GameButtons";
import PlayRound from "./RPScomponents";

export const StartingScreen = () => {
  const {
    paper,
    setPaper,
    scissors,
    setScissors,
    rock,
    setRock,
    setComputerPick,
    setPlayerPick,
    playerPick,
    setScore,
    setResult,
    setRound,
  } = useContext(GameContext);
  return (
    <>
      {paper || scissors || rock || (
        <>
          <div className="z-20 flex justify-center items-center w-full h-full relative">
            <div className="flex flex-wrap justify-center w-[550px] gap-32 items-center">
              <button
                onClick={() => {
                  setPaper(true);

                  setResult(
                    PlayRound({ setComputerPick, setScore, setResult, setPlayerPick }, "paper")
                  );
                  setRound((round) => round + 1);
                }}
                className="rounded-full p-0 h-fit z-50"
              >
                <GameButton weapon="paper" />
              </button>

              <button
                onClick={() => {
                  setScissors(true);

                  setResult(
                    PlayRound(
                      { setComputerPick, setScore, setResult, setPlayerPick },
                      "scissors"
                    )
                  );
                  setRound((round) => round + 1);
                }}
                className="rounded-full p-0 h-fit  z-50"
              >
                <GameButton weapon="scissors" />
              </button>

              <button
                onClick={() => {
                  setRock(true);

                  setResult(
                    PlayRound({ setComputerPick, setScore, setResult, setPlayerPick }, "rock")
                  );
                  setRound((round) => round + 1);
                }}
                className="rounded-full p-0 h-fit z-50"
              >
                <GameButton weapon="rock" />
              </button>
          
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
                <img src="/bg-triangle.svg" />
              </div>
          </div>
        </>
      )}
    </>
  );
};
