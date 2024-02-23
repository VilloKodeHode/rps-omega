import { GameContext } from "@/app/data/gameContext";
import {useContext } from "react";
export const RPSHeader = () => {
    const {
        score, 
        animationClass,
      } = useContext(GameContext);
    return (
        
        <>
        <div className="flex justify-between xl:w-1/2 sm:w-2/3 m-auto border-2 rounded-2xl p-4">
          <div className="font-extrabold leading-7 text-start text-white text-4xl">
            <img src="/logo.svg" />
          </div>

          <div className="h-[99px] flex flex-col justify-center py-2 px-12 w-fit bg-white rounded-md">
            <p className="text-blue-700 tracking-widest">SCORE</p>
            <h2
              className={`font-extrabold text-center text-6xl text-slate-500 ${animationClass}`}
            >
              {score}
            </h2>
          </div>
        </div>
        </>
    )
}