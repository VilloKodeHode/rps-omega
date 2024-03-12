"use client"

import { createContext, useContext, useState } from "react";

export const GameContext = createContext({
    paper: "", setPaper: () => { },
    scissors: "", setScissors: () => { },
    rock: "", setRock: () => { },
    lizard: "", setLizard: () => { },
    spock: "", setSpock: () => { },
    fire: "", setFire: () => { },
    water: "", setWater: () => { },
    playerPick: "", setPlayerPick: () => { },
    computerPick: "", setComputerPick: () => { },
    score: null, setScore: () => { },
    result: "", setResult: () => { },
    toggle: "", setToggle: () => { },
    animationClass: "", setAnimationClass: () => { },
    round: null, setRound: () => { },
    weaponData: null, setWeapondata: () => { },
    gameType: null, setGameType: () => { },
})

export const GameContextProvider = ({ children }) => {
    const [paper, setPaper] = useState(false);
    const [scissors, setScissors] = useState(false);
    const [rock, setRock] = useState(false);
    const [lizard, setLizard] = useState(false);
    const [spock, setSpock] = useState(false);
    const [fire, setFire] = useState(false);
    const [water, setWater] = useState(false);
    const [playerPick, setPlayerPick] = useState("");
    const [computerPick, setComputerPick] = useState("");
    const [score, setScore] = useState(0);
    const [result, setResult] = useState("");
    const [toggle, setToggle] = useState(false);
    const [animationClass, setAnimationClass] = useState("");
    const [round, setRound] = useState(0);
    const [weaponData, setWeaponData] = useState([]);
    const [gameType, setGameType] = useState("");

    const states = {
        paper, setPaper,
        scissors, setScissors,
        rock, setRock,
        lizard, setLizard,
        spock, setSpock,
        fire, setFire,
        water, setWater,
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
    return (
        <GameContext.Provider value={states}>
            {children}
        </GameContext.Provider>
    )
}

// export const states = [paper, setPaper,
//     scissors, setScissors,
//     rock, setRock,
//     playerPick, setPlayerPick,
//     computerPick, setComputerPick,
//     score, setScore,
//     result, setResult,
//     toggle, setToggle,
//     animationClass, setAnimationClass,
//     round, setRound,
//     weaponData, setWeaponData,
//     gameType, setGameType]

export const useGameContext = () => {
    const {       paper, setPaper,
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