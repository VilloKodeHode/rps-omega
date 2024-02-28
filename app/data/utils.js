import { useContext } from "react";
import { weaponsInfo } from "./weapons";
import { GameContext, useGameContext } from "./gameContext";



export const findWeaponColor = (weapon, lightOrDark) => {
    const weaponInfo = weaponsInfo.find((info) => info.weaponName === weapon);
    return weaponInfo ? weaponInfo[lightOrDark + "Color"] : null;
};


export const findWeaponInfo = (weapon, infoToFind) => {
    const weaponInfo = weaponsInfo.find((info) => info.weaponName === weapon)
    return weaponInfo ? weaponInfo[infoToFind] : null;
};


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

