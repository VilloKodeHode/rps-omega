"use client"

import { createContext, useState, useContext } from "react";

export const GameContext = createContext({
    paper: "", setPaper: () => { },
    scissors: "", setScissors: () => { },
    rock: "", setRock: () => { },
    playerPick: "", setPlayerPick: () => { },
    computerPick: "", setComputerPick: () => { },
    score: null, setScore: () => { },
    result: "", setResult: () => { },
    toggle: "", setToggle: () => { },
    animationClass: "", setAnimationClass: () => { },
    round: null, setRound: () => { },
    test: "test", setTest: () => { },
})

export const GameContextProvider = ({ children }) => {
    const [paper, setPaper] = useState(false);
    const [scissors, setScissors] = useState(false);
    const [rock, setRock] = useState(false);
    const [playerPick, setPlayerPick] = useState("");
    const [computerPick, setComputerPick] = useState("");
    const [score, setScore] = useState(0);
    const [result, setResult] = useState("");
    const [toggle, setToggle] = useState(false);
    const [animationClass, setAnimationClass] = useState("");
    const [round, setRound] = useState(0);
    const [test, setTest] = useState("test");
    return (
        <GameContext.Provider value={{
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
            test, setTest
        }}>{children}
        </GameContext.Provider>
    )
}

// export const useGameContext = () => {
//     const { paper, setPaper,
//         scissors, setScissors,
//         rock, setRock,
//         playerPick, setPlayerPick,
//         computerPick, setComputerPick,
//         score, setScore,
//         result, setResult,
//         toggle, setToggle,
//         animationClass, setAnimationClass,
//         round, setRound, test, setTest } = useContext(GameContext)
//     return (
//         {
//             paper, setPaper,
//             scissors, setScissors,
//             rock, setRock,
//             playerPick, setPlayerPick,
//             computerPick, setComputerPick,
//             score, setScore,
//             result, setResult,
//             toggle, setToggle,
//             animationClass, setAnimationClass,
//             round, setRound,
//             test, setTest
//         }
//     )
// }