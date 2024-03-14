import { findWeaponInfoFromMongoDB, randomWeapon, updateScore } from "@/app/data/utils";

export function PlayRound(
  { setComputerPick, setScore, setResult, weaponData, gameType },
  playerPick
) {

  //TODO randomWeapon needs to change according to number of used weapons
  const computerPick = randomWeapon(gameType === "RPS" ? 3 : gameType === "RPSLS" ? 5 : gameType === "RPSLSFW" ? 7 : gameType === "OMEGA" ? 9 : null);

  setComputerPick(computerPick);

  let result;
  findWeaponInfoFromMongoDB(weaponData, playerPick, "win").includes(computerPick) === true 
  ? result = "WIN" 
  : computerPick !== playerPick 
  ? result = "LOSE" 
  : result = "DRAW";

  updateScore(result, setScore);
  setResult(result);

  return result;
}

export default PlayRound;