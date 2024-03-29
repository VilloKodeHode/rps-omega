"use client";

//style
import "../styles/RockPaperScissor.css";

import { StartingScreen } from "../components/RPS/StartingScreen";
import { GameContext } from "@/app/data/gameContext";
import { RPSHeader } from "../components/RPS/Header";
import { RPSShowResult } from "../components/RPS/RoundResult";
import { useContext, useEffect } from "react";
import { RPSRules } from "../components/RPS/GameRules";
import { Navigation } from "../components/Navigation";

export const RockPaperScissors = ({ data }) => {
  const { setAnimationClass, round, result, setWeaponData} =
    useContext(GameContext);
//TODO can i reduce the amount of useEffects?
  useEffect(() => {
    setWeaponData(data);
  }, [data]);

  //TODO maybe try to fix cookies?
  // //set useState for fetched data and cookies
  // useEffect(() => {

  //   const updateCookie = async () => {
  //     deleteCookie("data");
  //     setFetchedDataToCookie("data", data)
  //     setWeaponData(getCookieData("data"));

  //     console.log("weaponData", weaponData);
  //   };

  //   updateCookie();
  // }, [data]);

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
