import { GameContext } from "@/app/data/gameContext";
import { useContext, useEffect } from "react";
import { ActiveGameButton } from "../Buttons/GameButtons";
import PlayRound from "@/app/logic/GameLogic";
import { findWeaponInfo, getAllWeaponNames, weaponsToUse } from "@/app/data/utils";

export const StartingScreen = ({ data }) => {
  const {
    paper,
    setPaper,
    scissors,
    setScissors,
    rock,
    setRock,
    setComputerPick,
    setPlayerPick,
    setScore,
    setResult,
    setRound,
    weaponData,
  } = useContext(GameContext);

  const handlePlayRound = (weapon) => {
    setRound((round) => round + 1);
    setPlayerPick(weapon);
    PlayRound({ setComputerPick, setScore, setResult }, weapon);
  };

  return (
    <>
      {paper || scissors || rock || (
        <>
          <div className="relative z-20 flex items-center justify-center w-full h-full">
            <div className="flex flex-wrap justify-center w-[550px] gap-32 items-center">
              <>
                {weaponsToUse("RPS").map((weapon) => (
                  <ActiveGameButton
                    key={weapon}
                    weapon={weapon}
                    handleButtonClick={handlePlayRound}
                    setWeapon={weapon === "paper" ? setPaper : weapon === "scissors" ? setScissors : setRock}
                  />
                ))}
                {/* <ActiveGameButton
                  setWeapon={setPaper}
                  weapon="paper"
                  handleButtonClick={handlePlayRound}
                />

                <ActiveGameButton
                  setWeapon={setScissors}
                  weapon="scissors"
                  handleButtonClick={handlePlayRound}
                />

                <ActiveGameButton
                  setWeapon={setRock}
                  weapon="rock"
                  handleButtonClick={handlePlayRound}
                /> */}
              </>
            </div>
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 -z-10">
              <img src="/bg-triangle.svg" />
            </div>
          </div>
        </>
      )}
    </>
  );
};
