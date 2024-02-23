"use client";

import { useEffect, useState, useContext } from "react";
import Link from "next/link";

//style
import "./RockPaperScissor.css";

import PlayRound, {
  EmptyGameButton,
  InactiveGameButton,
  ResultandRestart,
  WinnerGlow,
} from "./RPScomponents";
import { StartingScreen } from "./RPSStartingScreen";
import { GameContext } from "@/app/data/gameContext";
import { RPSHeader } from "./RPSHeader";
import { GameButton } from "../Buttons/GameButtons";
import { ComputerResult } from "./ComputerResult";
import { RPSShowResult } from "./RPSShowResult";

export const RockPaperScissors = () => {
  const {
    paper,
    setPaper,
    scissors,
    setScissors,
    rock,
    setRock,
    computerPick,
    setComputerPick,
    score,
    setScore,
    result,
    setResult,
    toggle,
    setToggle,
    animationClass,
    setAnimationClass,
    round,
    setRound,
  } = useContext(GameContext);

  useEffect(() => {
    console.log("Result is: " + result);
    console.log("Round: " + round);
  }, [result]);

  useEffect(() => {
    setAnimationClass("animate-RPSPopUpDelayed");
    setTimeout(() => {
      setAnimationClass("");
    }, 1500);
  }, [round]);

  return (
    <>
      {/* <Link
        className="absolute top-2 left-2 p-2 m-2 bg-water-200 h-fit w-fit rounded-xl z-50 opacity-80"
        to="/RockPaperScissorsLizardSpock"
      > */}
      <img className="h-12 w-12" src="/logo-bonus.svg" />
      {/* </Link> */}
      {/* <Link
        className="absolute top-20 left-2 p-2 m-2 bg-water-200 h-fit w-fit rounded-xl z-50 opacity-80"
        to="/RockPaperScissorsLizardSpockFireWater"
      > */}
      <img className="h-12 w-12" src="/logo-firewater.png" />
      {/* </Link> */}
      <div
        id="RPS"
        className="select-none absolute top-0 left-0 w-screen h-screen text-white"
      >
        <RPSHeader />

        <div className="flex flex-wrap w-full h-full justify-center m-auto [&>*]:animate-RPSPopUp">
          <StartingScreen PlayRound={PlayRound} />

          <div className="animate-RPSPopUp">
            
            <RPSShowResult/>
            

          </div>
        </div>
        <div className="z-50">
          <button
            className="bg-transparent text-white absolute border-white hover:bg-transparent hover:border-gray-400 right-6 bottom-6 px-6 btn p-2 rounded-xl border-2 shadow-xl"
            onClick={() => setToggle(!toggle)}
          >
            RULES
          </button>
          {toggle && (
            <>
              <div className="">
                <div className="absolute left-1/2 bottom-1/2 translate-y-1/2 -translate-x-1/2 z-50 bg-gray-100 sm:w-1/2 xl:w-1/4 h-[40%] m-auto rounded-xl animate-rulesSlideIn">
                  <h1 className="text-left text-2xl p-4 z-50 text-black">
                    RULES
                  </h1>
                  <button
                    className="absolute bg-transparent right-3 top-3 p-2 z-50"
                    onClick={() => setToggle(!toggle)}
                  >
                    <img src="/icon-close.svg" />
                  </button>
                  <img className=" m-auto" src="/image-rules.svg" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
