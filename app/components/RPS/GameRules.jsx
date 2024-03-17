import { GameContext } from "@/app/data/gameContext";
import { useContext } from "react";

export const RPSRules = () => {
  const { toggle, setToggle, gameType } = useContext(GameContext);
  return (
    <div className="z-40">
      <button
        className="absolute p-2 px-6 text-white bg-transparent border-2 border-white shadow-xl hover:bg-transparent hover:border-gray-400 right-6 bottom-6 btn rounded-xl"
        onClick={() => setToggle(!toggle)}
      >
        RULES
      </button>
      {toggle && (
        <>
          <div className="">
            <div className="absolute z-50 p-8 m-auto -translate-x-1/2 translate-y-1/2 bg-gray-600 opacity-[99%] left-1/2 bottom-1/2 sm:w-1/2 xl:w-1/4 h-fit rounded-xl animate-rulesSlideIn">
              <h1 className="z-50 text-2xl text-left text-white">RULES</h1>
              <button
                className="absolute z-50 p-2 bg-transparent right-3 top-3"
                onClick={() => setToggle(!toggle)}
              >
                <img src="/icon-close.svg" />
              </button>

              <img className="m-auto " src={`/rules-${gameType}.png`} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
