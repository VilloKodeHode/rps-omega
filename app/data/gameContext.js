"use client"

import { createContext, useContext, useState } from "react";

// Defining all useStates in GameContext seems redundant, but makes it easier to refer to the states. Example: 
/*    const setType =
GameContext._currentValue[
    `set${weapon.charAt(0).toUpperCase()}${weapon.slice(1)}`
  ];*/

export const GameContext = createContext({
    paper: "", setPaper: () => { },
    scissors: "", setScissors: () => { },
    rock: "", setRock: () => { },
    lizard: "", setLizard: () => { },
    spock: "", setSpock: () => { },
    fire: "", setFire: () => { },
    water: "", setWater: () => { },
    earth: "", setEarth: () => { },
    air: "", setAir: () => { },
    playerPick: "", setPlayerPick: () => { },
    computerPick: "", setComputerPick: () => { },
    score: null, setScore: () => { },
    result: "", setResult: () => { },
    resultText: "", setResultText: () => { },
    toggle: "", setToggle: () => { },
    animationClass: "", setAnimationClass: () => { },
    round: null, setRound: () => { },
    weaponData: null, setWeapondata: () => { },
    gameType: null, setGameType: () => { },
    hoveredWeapon: null, setHoveredWeapon: () => { },
})

export const GameContextProvider = ({ children }) => {
    const [paper, setPaper] = useState(false);
    const [scissors, setScissors] = useState(false);
    const [rock, setRock] = useState(false);
    const [lizard, setLizard] = useState(false);
    const [spock, setSpock] = useState(false);
    const [fire, setFire] = useState(false);
    const [water, setWater] = useState(false);
    const [earth, setEarth] = useState(false);
    const [air, setAir] = useState(false);
    const [playerPick, setPlayerPick] = useState("");
    const [computerPick, setComputerPick] = useState("");
    const [score, setScore] = useState(0);
    const [result, setResult] = useState("");
    const [resultText, setResultText] = useState("");
    const [toggle, setToggle] = useState(false);
    const [animationClass, setAnimationClass] = useState("");
    const [round, setRound] = useState(0);
    const [weaponData, setWeaponData] = useState([]);
    const [gameType, setGameType] = useState("");
    const [hoveredWeapon, setHoveredWeapon] = useState(null);
    

    const states = {
        paper, setPaper,
        scissors, setScissors,
        rock, setRock,
        lizard, setLizard,
        spock, setSpock,
        fire, setFire,
        water, setWater,
        earth, setEarth,
        air, setAir,
        playerPick, setPlayerPick,
        computerPick, setComputerPick,
        score, setScore,
        result, setResult,
        resultText, setResultText,
        toggle, setToggle,
        animationClass, setAnimationClass,
        round, setRound,
        weaponData, setWeaponData,
        gameType, setGameType,
        hoveredWeapon, setHoveredWeapon
    }
    return (
        <GameContext.Provider value={states}>
            {children}
        </GameContext.Provider>
    )
}


//! Not in use:
export const useGameContext = () => {
    const { paper, setPaper,
        scissors, setScissors,
        rock, setRock,
        playerPick, setPlayerPick,
        computerPick, setComputerPick,
        score, setScore,
        result, setResult,
        toggle, setToggle,
        animationClass, setAnimationClass,
        round, setRound,
        weaponData, setWeaponData,
        gameType, setGameType } = useContext(GameContext)
    return (
        {
            paper, setPaper,
            scissors, setScissors,
            rock, setRock,
            playerPick, setPlayerPick,
            computerPick, setComputerPick,
            score, setScore,
            result, setResult,
            toggle, setToggle,
            animationClass, setAnimationClass,
            round, setRound,
            weaponData, setWeaponData,
            gameType, setGameType
        }
    )
}