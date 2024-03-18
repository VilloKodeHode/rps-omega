import { GameContext } from "@/app/data/gameContext";
import {
  findWeaponColor,
  findWeaponColorFromMongoDB,
  findWeaponInfoFromMongoDB,
} from "@/app/data/utils";
import { useContext } from "react";

// TODO: Make the buttons change size when adding more weapons on the screen?

export const GameButton = ({ weapon }) => {
  const { weaponData } = useContext(GameContext);

  const weaponDarkColor = weaponData
    ? findWeaponColorFromMongoDB(weapon, "dark")
    : "292a2d";
  const weaponLightColor = weaponData
    ? findWeaponColorFromMongoDB(weapon, "light")
    : "292a2d";
  return (
    <>
      <div
        style={{
          backgroundColor: weaponDarkColor,
          borderColor: weaponDarkColor,
        }}
        className={`m-auto Button3d border-b-8 h-fit w-fit rounded-full z-40 `}
      >
        <div
          style={{ borderColor: weaponLightColor }}
          className={`rounded-full h-fit w-fit p-10 bg-white border-[22px] buttonshadow`}
        >
          <div className="relative flex w-20 h-20">
            <img className="z-20 w-16 m-auto" src={`/images/weapons/icon-${weapon}.svg`} />
          </div>
        </div>
      </div>
    </>
  );
};

export const ActiveGameButton = ({ weapon, handlePlayRound, className }) => {
  //TODO See if logic can be improved. Do I need yet another useState for this?
  const { setHoveredWeapon, weaponData, hoveredWeapon } = useContext(GameContext);
  const islosingWeapon = findWeaponInfoFromMongoDB(weaponData, weapon, "loss").includes(hoveredWeapon);
  const isWinningWeapon = findWeaponInfoFromMongoDB(weaponData, weapon, "win").includes(hoveredWeapon);

  return (
    <button
      id={weapon + "Button"}
      onClick={() => {
        handlePlayRound(weapon);
      }}
      onMouseEnter={() => {
        setHoveredWeapon(weapon);
      }}
      onMouseLeave={()=> setHoveredWeapon(null)}
      className={`z-50 hover:scale-95 p-0 relative  ${islosingWeapon ? "scale-105 shadow-[0_0_5px_3px_#2cdae5] " : isWinningWeapon ? "scale-90 shadow-[0_0_5px_3px_#f87171]" : null} transition-all rounded-full w-fit h-fit ${className}`}
    >
      <p className="absolute -translate-x-1/2 -top-7 left-1/2 ">{islosingWeapon ? "Wins against" : isWinningWeapon ? "Loses against": null}</p>
      <GameButton weapon={weapon} />
    </button>
  );
};

export const TestButton = ({ weapon }) => {
  const weaponDarkColor = findWeaponColor(weapon, "dark");

  const weaponLightColor = findWeaponColor(weapon, "light");

  return (
    <>
      <div
        style={{
          backgroundColor: weaponDarkColor,
          borderColor: weaponDarkColor,
        }}
        className={`m-auto Button3d border-b-8 h-fit w-fit rounded-full z-40 `}
      >
        <div
          style={{ borderColor: weaponLightColor }}
          className={`rounded-full h-fit w-fit p-10 bg-white border-[22px] buttonshadow`}
        >
          <div className="relative flex w-20 h-20">
            <img className="z-20 w-16 m-auto" src={`/icon-${weapon}.svg`} />
          </div>
        </div>
      </div>
    </>
  );
};

export function ButtonShadow({ playerOrComputer }) {
  return (
    <div
      className={`absolute origin-left -translate-x-1/2 -translate-y-1/2 ${
        playerOrComputer === "computer"
          ? "animate-computerButtonShadow"
          : "animate-playerButtonShadow"
      } top-1/2 left-1/2`}
    >
      <div
        className={`rounded-full p-10 bg-[#15183c] 
      `}
      >
        <div className="flex w-32 h-32"></div>
      </div>
    </div>
  );
}

export function WinnerGlow() {
  return (
    <>
      <div className="[&>*]:animate-RPSPopUpDelayed">
        <div className=" [&>*]:animate-glow">
          <div className="absolute h-[300px] w-[300px] bg-sky-900 bg-opacity-30 winner -z-10 rounded-full"></div>
          <div className="absolute h-[400px] w-[400px] bg-sky-900 bg-opacity-20 winner -z-20 rounded-full"></div>
          <div className="absolute h-[500px] w-[500px] bg-sky-900 bg-opacity-10 winner -z-30 rounded-full"></div>
        </div>
      </div>
    </>
  );
}

