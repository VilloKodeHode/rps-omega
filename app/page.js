"use client"


import { RockPaperScissors } from "./pages/RPSpage";
import { GameButton } from "./components/Buttons/GameButtons";
import { GameContext, GameContextProvider } from "./data/gameContext";




export default function Home() {
  return (

 <GameContextProvider>
      <main className="flex flex-col items-center justify-between min-h-screen p-24">
        <RockPaperScissors />
        {/* <GameButton weapon="fire"/> */}

      </main>
    </GameContextProvider>
  );
}
