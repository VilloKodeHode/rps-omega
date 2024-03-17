import { GameContext } from "@/app/data/gameContext";
import { useContext } from "react";
export const RPSHeader = () => {
  const { score, animationClass, gameType } = useContext(GameContext);
  return (
    <>
      <div className="flex justify-between p-4 m-auto border-2 xl:w-1/2 sm:w-2/3 rounded-2xl">
        <div className="text-4xl font-extrabold leading-7 text-white text-start">
          {/* //TODO Create and add text logoes for each gameType? */}
          <img src={`/logo-${gameType}.svg`} className="max-h-[99px]" />
        </div>
        <div className="h-[99px] flex flex-col justify-center py-2 px-12 w-fit bg-white rounded-md">
          <p className="tracking-widest text-blue-700">SCORE</p>
          <h2
            className={`font-extrabold text-center text-6xl text-slate-500 ${animationClass}`}
          >
            {score}
          </h2>
        </div>
      </div>
    </>
  );
};
