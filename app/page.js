"use client"

import Image from "next/image";
import { RockPaperScissors } from "./components/RPS/RPSpage";
import { GameButton } from "./components/Buttons/GameButtons";
import { GameContext, GameContextProvider } from "./data/gameContext";



export default function Home() {
  return (

 <GameContextProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <RockPaperScissors />
        {/* <GameButton weapon="fire"/> */}
    
      </main>
    </GameContextProvider>
  );
}
