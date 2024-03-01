"use client"

import { findWeaponInfo, randomWeapon, updateScore } from "@/app/data/utils";

function PlayRound(
  { setComputerPick, setScore, setResult, setPlayerPick },
  playerPick
) {
  const computerPick = randomWeapon(3);

  setComputerPick(computerPick);

  let result;

  if (findWeaponInfo(playerPick, "win").includes(computerPick) === true) {
    result = "WIN";
    updateScore(result, setScore);
  } else if (computerPick !== playerPick) {
    result = "LOSE";

    updateScore(result, setScore);
  } else {
    result = "DRAW";
  }
  setPlayerPick(playerPick);
  setResult(result);
  console.log(playerPick);
  return result;
}

export function ResultandRestart({ result, setType, setPlayerPick }) {
  return (
    <div className="z-50 flex flex-col justify-center mx-8 [&>*]:animate-RPSPopUpResult">
      <h1 className="text-6xl text-center">
        {result === "WIN" || result === "LOSE" ? "YOU " : null}
        {result}
      </h1>
      <button
        className="z-50 p-2 px-10 m-8 tracking-widest text-red-600 bg-white h-fit w-fit text-md"
        onClick={() => {
          setType(false);
          setPlayerPick("")
        }}
      >
        PLAY AGAIN
      </button>
    </div>
  );
}

export default PlayRound;
