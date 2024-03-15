import { GameContext } from "@/app/data/gameContext";
import { useContext, useEffect } from "react";
import { ActiveGameButton } from "../Buttons/GameButtons";
import PlayRound from "@/app/logic/GameLogic";
import {
  findWeaponInfo,
  findWeaponInfoFromMongoDB,
  weaponsToUse,
} from "@/app/data/utils";

export const StartingScreen = () => {
  const {
    playerPick,
    computerPick,
    setPlayerPick,
    setComputerPick,
    setScore,
    setResult,
    setRound,
    weaponData,
    gameType,
    setResultText,
    hoveredWeapon
  } = useContext(GameContext);

  const winText = findWeaponInfoFromMongoDB(weaponData, playerPick, "winText");
  const lossText = findWeaponInfoFromMongoDB(weaponData, computerPick, "winText");
  useEffect(() => {
    const findCorrectWinText = winText && computerPick in winText;

    let showCorrectText;
    if (playerPick && computerPick) {
      showCorrectText =
        playerPick !== computerPick
          ? findCorrectWinText
            ? winText[computerPick]
            : lossText[playerPick]
          : "";
    } else {
      showCorrectText = "Waiting for player pick...";
    }
    setResultText(showCorrectText);
    console.log(showCorrectText);
  }, [playerPick]);


  useEffect(() => {
    hoveredWeapon && console.log(hoveredWeapon)
  }, [hoveredWeapon])

  const handlePlayRound = (weapon) => {
    setRound((round) => round + 1);
    setPlayerPick(weapon);
    const setType =
      GameContext._currentValue[
        //TODO make a function for capitalizing (or is there js existing for this?)
        `set${weapon.charAt(0).toUpperCase()}${weapon.slice(1)}`
      ];
    setType(true);
    //TODO: Can this be improved and removed here?
    PlayRound(
      { setComputerPick, setScore, setResult, gameType, weaponData },
      weapon
    );
  };

  return (
    <>
      {!playerPick && (
        <>
          <div className="relative z-20 flex items-center justify-center w-full h-full">
            <div
              className={` justify-center flex flex-wrap ${gameType === "RPS" ? "gap-32" :gameType === "RPSLS" ? "gap-16" : gameType === "RPSLSFW" ? "gap-8" : "gap-4"} max-w-[1440px]  items-center`}
            >
              <>
 
                {weaponsToUse(gameType).map((weapon) => (
                  <ActiveGameButton
                    key={weapon}
                    weapon={weapon}
                    handlePlayRound={handlePlayRound}
                  />
                ))}
              </>
            </div>
            {/*//TODO: Improve this logic so it can be dynamic with a useState instead. Should be linked with gameType a different way (link the two useStates? Or extent gameType to have two values?) */}
            {/* //! Removed. Will be used later if I can find a good way to place the different buttons to the shapes */}
            {/* <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 -z-10">
          
              <img
                src={`/bg-${
                  gameType === "RPS"
                    ? "triangle"
                    : gameType === "RPSLS"
                    ? "pentagon"
                    : "heptagon"
                }.svg`}
              />
            </div> */}
          </div>
        </>
      )}
    </>
  );
};
