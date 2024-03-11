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
    gameType,
    setGameType
  } = useContext(GameContext);

  const handlePlayRound = (weapon) => {
    setRound((round) => round + 1);
    setPlayerPick(weapon);
    //TODO: Can this be improved and removed here?
    PlayRound({ setComputerPick, setScore, setResult }, weapon);
  };

  //TODO: Logic should be moved up and be dynamic with current url
  useEffect(() => {
    setGameType("RPS")
    console.log("game type is: ", gameType)
  }, []);


  return (
    <>
      {paper || scissors || rock || (
        <>
          <div className="relative z-20 flex items-center justify-center w-full h-full">
            <div className="flex flex-wrap justify-center w-[550px] gap-32 items-center">
              <>
                {weaponsToUse().map((weapon) => (
                  <ActiveGameButton
                    key={weapon}
                    weapon={weapon}
                    handleButtonClick={handlePlayRound}
                    // TODO Improve so this work with other weapons that are included later on
                    setWeapon={weapon === "paper" ? setPaper : weapon === "scissors" ? setScissors : setRock}
                  />
                ))}
              </>
            </div>
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 -z-10">
              {/*//TODO: Improve this logic so it can be dynamic with a useState instead. Should be linked with gameType a different way (link the two useStates? Or extent gameType to have two values?) */}
              <img src={`/bg-${gameType === "RPS" ? "triangle" : gameType === "RPSLS"? "pentagon" : "heptagon"}.svg`} />
            </div>
          </div>
        </>
      )}
    </>
  );
};
