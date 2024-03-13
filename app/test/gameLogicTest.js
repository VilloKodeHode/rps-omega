//TEST:

import { weaponsInfo } from "../data/weapons"



export const testGameLogic = () => {
    // Create an object to store the counts for each weapon
    const weaponCounts = {};
  
    // Iterate over each object in weaponsInfo
    weaponsInfo.forEach(weapon => {
      // Increment the count for the weapon in the win array
      weapon.win.forEach(winWeapon => {
        weaponCounts[winWeapon] = (weaponCounts[winWeapon] || 0) + 1;
      });
  
      // Increment the count for the weapon in the loss array
      weapon.loss.forEach(lossWeapon => {
        weaponCounts[lossWeapon] = (weaponCounts[lossWeapon] || 0) + 1;
      });
    });
  
    // Log the counts for each weapon
    Object.entries(weaponCounts).forEach(([weapon, count]) => {
      console.log(`${weapon} are used ${count} times`);
    });
  
    // Get the count of occurrences for the first weapon
    const firstWeaponCount = Object.values(weaponCounts)[0];
  
    // Check if all weapons have the same count of occurrences as the first weapon
    const isUsageEqual = Object.values(weaponCounts).every(count => count === firstWeaponCount);
  
    // Log the result
    if (isUsageEqual) {
      console.log('All different weapons are used the same number of times.');
    } else {
      console.log('Not all different weapons are used the same number of times.');
    }
  }
  