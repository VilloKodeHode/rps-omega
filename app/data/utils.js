import { useContext } from "react";
import { weaponsInfo } from "./weapons";
import { GameContext } from "./gameContext";



export const findWeaponColor = (weapon, lightOrDark) => {
    const weaponInfo = weaponsInfo.find((info) => info.weaponName === weapon);
    return weaponInfo ? weaponInfo[lightOrDark + "Color"] : null;
};
export const findWeaponColorFromMongoDB = (weapon, lightOrDark) => {
    const { weaponData } = useContext(GameContext)
    const weaponInfo = weaponData.find((info) => info.weaponName === weapon);
    return weaponInfo ? weaponInfo[lightOrDark + "Color"] : null;
}


export const findWeaponInfo = (weapon, infoToFind) => {
    const weaponInfo = weaponsInfo.find((info) => info.weaponName === weapon)
    return weaponInfo ? weaponInfo[infoToFind] : null;
};

export const findWeaponInfoFromMongoDB = (weaponData, weapon, infoToFind) => {
    const weaponInfo = weaponData.find((info) => info.weaponName === weapon)
    return weaponInfo ? weaponInfo[infoToFind] : null;

}


export const updateScore = (result, setScore) => {
    // const { result, setScore } = useGameContext(GameContext)
    setTimeout(() => {
        result === "WIN" ?
            setScore((prevScore) => prevScore + 1)
            : result === "LOSE" ?
                setScore((prevScore) => prevScore - 1)
                :
                null
    }, 500);
}

export const randomWeapon = (numOfWeapons) => weaponsInfo[Math.floor(Math.random() * numOfWeapons)].weaponName;

export const getAllWeaponNames = () => weaponsInfo.map((weapon) => weapon.weaponName)

export const weaponsToUse = (gameType) => {
    return getAllWeaponNames().slice(0, gameType === "RPS" ? 3 : gameType === "RPSLS" ? 5 : gameType === "RPSLSFW" ? 7 : gameType === "RPS-OMEGA" ? 9 : null)
}

