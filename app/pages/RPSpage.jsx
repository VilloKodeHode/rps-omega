"use client";

//style
import "../styles/RockPaperScissor.css";

import PlayRound from "../components/RPS/RPScomponents";
import { StartingScreen } from "../components/RPS/RPSStartingScreen";
import { GameContext } from "@/app/data/gameContext";
import { RPSHeader } from "../components/RPS/RPSHeader";
import { RPSShowResult } from "../components/RPS/RPSShowResult";
import { useContext, useEffect } from "react";
import { RPSRules } from "../components/RPS/RPSRules";
import { Navigation } from "../components/Navigation";

export const RockPaperScissors = () => {
  const { setAnimationClass, round, result } = useContext(GameContext);

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
      <Navigation />
      <div
        id="RPS"
        className="absolute top-0 left-0 w-screen h-screen text-white select-none"
      >
        <RPSHeader />

        <div className="flex flex-wrap w-full h-full justify-center m-auto [&>*]:animate-RPSPopUp">
          <StartingScreen PlayRound={PlayRound} />

 
            <RPSShowResult />
    
        </div>
        <RPSRules />
      </div>
    </>
  );
};
