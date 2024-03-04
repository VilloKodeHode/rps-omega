


import { RockPaperScissors } from "./pages/RPSpage";
import { GameButton } from "./components/Buttons/GameButtons";
import { GameContext, GameContextProvider } from "./data/gameContext";
import handler from "./db/mysqlConnection";

// import getData from "./data/test";






export default async function Home() {


  const results = await handler()
// console.log(results)
// console.log(results.win)



  return (

 <GameContextProvider>
      <main className="flex flex-col items-center justify-between min-h-screen p-24">
        <RockPaperScissors />
        {/* <GameButton weapon="fire"/> */}

      </main>
    </GameContextProvider>
  );
}


