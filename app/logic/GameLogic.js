import { findWeaponInfo, findWeaponInfoFromMongoDB, randomWeapon, updateScore } from "@/app/data/utils";

export function PlayRound(
    { setComputerPick, setScore, setResult, weaponData },
    playerPick
  ) {

    const computerPick = randomWeapon(3);
  
    setComputerPick(computerPick);
  
    let result;
  
    if (findWeaponInfoFromMongoDB(weaponData ,playerPick, "win").includes(computerPick) === true) {
      result = "WIN";
      //TODO update score can be moved down so its only needed once? The line before setResult?
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