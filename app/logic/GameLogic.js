import { findWeaponInfoFromMongoDB, numOfWeapons, randomWeapon, updateScore } from "@/app/data/utils";

export function PlayRound(
  { setComputerPick, setScore, setResult, weaponData, gameType },
  playerPick
) {

  const computerPick = randomWeapon(numOfWeapons(gameType));
  setComputerPick(computerPick);

  let result;
  // check if player wins by checking data from mongoDB:
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