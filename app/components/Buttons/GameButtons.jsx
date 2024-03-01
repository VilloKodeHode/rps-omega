"use client"

import { GameContext } from "@/app/data/gameContext";
import { findWeaponColor, findWeaponInfo } from "@/app/data/utils";
import { weapons, weaponsInfo } from "@/app/data/weapons";
import { useContext } from "react";

export const GameButton = ({ weapon }) => {
  // console.log(findWeaponInfo(weapon, "defeats").includes("paper"));

  const weaponLightColor = findWeaponColor(weapon, "light");
  const weaponDarkColor = findWeaponColor(weapon, "dark");

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

export const ActiveGameButton = ({setWeapon, weapon, handleButtonClick}) => {

  return (
    <button
    onClick={() => {
      setWeapon(true);
      handleButtonClick(weapon);
    }}
    className="z-50 p-0 rounded-full h-fit"
  >
    <GameButton weapon={weapon} />
  </button>
  )
}

export function EmptyGameButton({ playerOrComputer }) {
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

//Largest buttons:
export function ScissorsGameButton() {
  return (
    <div
      className={`border-b-8 bg-yellow-700 rounded-full border-yellow-700 z-40`}
    >
      <div
        className={`rounded-full p-10 bg-white border-[22px] border-yellow-500  buttonshadow`}
      >
        <div className="relative flex w-20 h-20">
          <img className="z-20 w-16 m-auto" src="/icon-scissors.svg" />
        </div>
      </div>
    </div>
  );
}

export function PaperGameButton() {
  return (
    <div className={`border-b-8 bg-blue-700 rounded-full border-blue-700 z-40`}>
      <div
        className={`rounded-full p-10 bg-white border-[22px] border-blue-500  buttonshadow`}
      >
        <div className="relative flex w-20 h-20">
          <img className="z-20 w-16 m-auto" src="/icon-paper.svg" />
        </div>
      </div>
    </div>
  );
}

export function RockGameButton() {
  return (
    <div className={`border-b-8 bg-red-700 rounded-full border-red-700 z-40`}>
      <div
        className={`rounded-full p-10 bg-white border-[22px] border-red-500  buttonshadow`}
      >
        <div className="relative flex w-20 h-20">
          <img className="z-20 w-16 m-auto" src="/icon-rock.svg" />
        </div>
      </div>
    </div>
  );
}

export function LizardGameButton() {
  return (
    <div
      className={`border-b-8 bg-purple-700 rounded-full border-purple-700 z-40`}
    >
      <div
        className={`rounded-full p-10 bg-white border-[22px] border-purple-500  buttonshadow`}
      >
        <div className="relative flex w-20 h-20">
          <img className="z-20 w-16 m-auto" src="/icon-lizard.svg" />
        </div>
      </div>
    </div>
  );
}

export function SpockGameButton() {
  return (
    <div className={`border-b-8 bg-teal-700 rounded-full border-teal-700 z-40`}>
      <div
        className={`rounded-full p-10 bg-white border-[22px] border-teal-500  buttonshadow`}
      >
        <div className="relative flex w-20 h-20">
          <img className="z-20 w-16 m-auto" src="/icon-spock.svg" />
        </div>
      </div>
    </div>
  );
}

export function FireGameButton() {
  return (
    <div
      className={`border-b-8 bg-orange-700 rounded-full border-orange-700 z-40`}
    >
      <div
        className={`rounded-full p-10 bg-white border-[22px] border-orange-500  buttonshadow`}
      >
        <div className="relative flex w-20 h-20">
          <img className="z-20 w-16 m-auto" src="/icon-fire.png" />
        </div>
      </div>
    </div>
  );
}

export function WaterGameButton() {
  return (
    <div className={`border-b-8 bg-sky-700 rounded-full border-sky-700 z-40`}>
      <div
        className={`rounded-full p-10 bg-white border-[22px] border-sky-500  buttonshadow`}
      >
        <div className="relative flex w-20 h-20">
          <img className="z-20 w-16 m-auto" src="/icon-water.png" />
        </div>
      </div>
    </div>
  );
}

//Smaller buttons:
export function ScissorsSmallGameButton() {
  return (
    <div
      className={`border-b-4 bg-yellow-700 rounded-full border-yellow-700 z-40`}
    >
      <div
        className={`rounded-full p-[36px] bg-white border-[22px] border-yellow-500  buttonshadow`}
      >
        <div className="relative flex w-20 h-20">
          <img className="w-[70px] m-auto z-20" src="/icon-scissors.svg" />
        </div>
      </div>
    </div>
  );
}

export function PaperSmallGameButton() {
  return (
    <div className={`border-b-8 bg-blue-700 rounded-full border-blue-700 z-40`}>
      <div
        className={`rounded-full p-[36px] bg-white border-[22px] border-blue-500  buttonshadow`}
      >
        <div className="relative flex w-20 h-20">
          <img className="w-[70px] m-auto z-20" src="/icon-paper.svg" />
        </div>
      </div>
    </div>
  );
}

export function RockSmallGameButton() {
  return (
    <div className={`border-b-8 bg-red-700 rounded-full border-red-700 z-40`}>
      <div
        className={`rounded-full p-[36px] bg-white border-[22px] border-red-500  buttonshadow`}
      >
        <div className="relative flex w-20 h-20">
          <img className="w-[70px] m-auto z-20" src="/icon-rock.svg" />
        </div>
      </div>
    </div>
  );
}

export function LizardSmallGameButton() {
  return (
    <div
      className={`border-b-8 bg-purple-700 rounded-full border-purple-700 z-40`}
    >
      <div
        className={`rounded-full p-[36px] bg-white border-[22px] border-purple-500  buttonshadow`}
      >
        <div className="relative flex w-20 h-20">
          <img className="w-[70px] m-auto z-20" src="/icon-lizard.svg" />
        </div>
      </div>
    </div>
  );
}

export function SpockSmallGameButton() {
  return (
    <div className={`border-b-8 bg-teal-700 rounded-full border-teal-700 z-40`}>
      <div
        className={`rounded-full p-[28px] bg-white border-[22px] border-teal-500  buttonshadow`}
      >
        <div className="relative flex w-24 h-24">
          <img className="w-[70px] m-auto z-20" src="/icon-spock.svg" />
        </div>
      </div>
    </div>
  );
}

export function FireSmallGameButton() {
  return (
    <div
      className={`border-b-8 bg-orange-700 rounded-full border-orange-700 z-40`}
    >
      <div
        className={`rounded-full p-[28px] bg-white border-[22px] border-orange-500  buttonshadow`}
      >
        <div className="relative flex w-24 h-24">
          <img className="w-[70px] m-auto z-20" src="/icon-fire.png" />
        </div>
      </div>
    </div>
  );
}

export function WaterSmallGameButton() {
  return (
    <div className={`border-b-8 bg-sky-700 rounded-full border-sky-700 z-40`}>
      <div
        className={`rounded-full p-[28px] bg-white border-[22px] border-sky-500  buttonshadow`}
      >
        <div className="relative flex w-24 h-24">
          <img className="w-[70px] m-auto z-20" src="/icon-water.png" />
        </div>
      </div>
    </div>
  );
}

//Smallest buttons:
export function ScissorsSmallestGameButton() {
  return (
    <div
      className={`border-b-2 bg-yellow-700 rounded-full border-yellow-700 z-40`}
    >
      <div
        className={`rounded-full p-[24px] bg-white border-[18px] border-yellow-500  buttonshadow`}
      >
        <div className="relative flex w-16 h-16">
          <img className="w-[55px] m-auto z-20" src="/icon-scissors.svg" />
        </div>
      </div>
    </div>
  );
}

export function PaperSmallestGameButton() {
  return (
    <div className={`border-b-2 bg-blue-700 rounded-full border-blue-700 z-40`}>
      <div
        className={`rounded-full p-[24px] bg-white border-[18px] border-blue-500  buttonshadow`}
      >
        <div className="relative flex w-16 h-16">
          <img className="w-[55px] m-auto z-20" src="/icon-paper.svg" />
        </div>
      </div>
    </div>
  );
}

export function RockSmallestGameButton() {
  return (
    <div className={`border-b-2 bg-red-700 rounded-full border-red-700 z-40`}>
      <div
        className={`rounded-full p-[24px] bg-white border-[18px] border-red-500  buttonshadow`}
      >
        <div className="relative flex w-16 h-16">
          <img className="w-[55px] m-auto z-20" src="/icon-rock.svg" />
        </div>
      </div>
    </div>
  );
}

export function LizardSmallestGameButton() {
  return (
    <div
      className={`border-b-2 bg-purple-700 rounded-full border-purple-700 z-40`}
    >
      <div
        className={`rounded-full p-[24px] bg-white border-[18px] border-purple-500  buttonshadow`}
      >
        <div className="relative flex w-16 h-16">
          <img className="w-[55px] m-auto z-20" src="/icon-lizard.svg" />
        </div>
      </div>
    </div>
  );
}

export function SpockSmallestGameButton() {
  return (
    <div className={`border-b-2 bg-teal-700 rounded-full border-teal-700 z-40`}>
      <div
        className={`rounded-full p-[24px] bg-white border-[18px] border-teal-500  buttonshadow`}
      >
        <div className="relative flex w-16 h-16">
          <img className="w-[55px] m-auto z-20" src="/icon-spock.svg" />
        </div>
      </div>
    </div>
  );
}

export function FireSmallestGameButton() {
  return (
    <div
      className={`border-b-2 bg-orange-700 rounded-full border-orange-700 z-40`}
    >
      <div
        className={`rounded-full p-[24px] bg-white border-[18px] border-orange-500  buttonshadow`}
      >
        <div className="relative flex w-16 h-16">
          <img className="w-[55px] m-auto z-20" src="/icon-fire.png" />
        </div>
      </div>
    </div>
  );
}

export function WaterSmallestGameButton() {
  return (
    <div className={`border-b-2 bg-sky-700 rounded-full border-sky-700 z-40`}>
      <div
        className={`rounded-full p-[24px] bg-white border-[18px] border-sky-500  buttonshadow`}
      >
        <div className="relative flex w-16 h-16">
          <img className="w-[55px] m-auto z-20" src="/icon-water.png" />
        </div>
      </div>
    </div>
  );
}

export default ScissorsGameButton;


