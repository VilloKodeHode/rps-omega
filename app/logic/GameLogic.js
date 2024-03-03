import { findWeaponInfo, randomWeapon, updateScore } from "@/app/data/utils";

export function PlayRound(
    { setComputerPick, setScore, setResult },
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
    setResult(result);
    
    return result;
  }

  export default PlayRound;