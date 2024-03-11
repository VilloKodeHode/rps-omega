"use client";

//style
import "../styles/RockPaperScissor.css";


import { StartingScreen } from "../components/RPS/RPSStartingScreen";
import { GameContext } from "@/app/data/gameContext";
import { RPSHeader } from "../components/RPS/RPSHeader";
import { RPSShowResult } from "../components/RPS/RPSShowResult";
import { Suspense, useContext, useEffect } from "react";
import { RPSRules } from "../components/RPS/RPSRules";
import { Navigation } from "../components/Navigation";
import Loading from "../components/RPS/loading";


export const RockPaperScissors = ({ data }) => {
  const { setAnimationClass, round, result, setWeaponData, weaponData } =
    useContext(GameContext);

    
  useEffect(() => {
    setWeaponData(data);
    console.log(weaponData)
  }, [data]);


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
    
          <StartingScreen />
    
          <RPSShowResult />
        </div>
        <RPSRules />
      </div>
    </>
  );
};
