"use client"

import { GameContext, useGameContext } from "@/app/data/gameContext";
import { weapons } from "@/app/data/weapons";
import { useContext } from "react";


export const GameButton = ({weapon}) => {
  const weaponLightColor = weapons[0][weapon][0];
  const weaponDarkColor = weapons[0][weapon][1];
  return (
    <>
      <div 
     
        style={{
          backgroundColor: weaponDarkColor,
          borderColor: weaponDarkColor,
        }}
        className={`m-auto border-b-8 h-fit w-fit rounded-full z-40 `}
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


