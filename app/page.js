


import { RockPaperScissors } from "./pages/RPSpage";
import { GameButton } from "./components/Buttons/GameButtons";
import { GameContext, GameContextProvider } from "./data/gameContext";
import handler from "./db/mysqlConnection";
import { setup } from "@/lib/mongoDB";
import { Suspense } from "react";
import { RPSSplashScreen } from "./components/RPS/SplashScreen";








export default async function Home() {

  // const results = await handler()
  const fetchWeaponInfo = await setup()

  return (

    <GameContextProvider>
      <main className="flex flex-col items-center justify-between min-h-screen p-24">
        <>
          <RPSSplashScreen data={fetchWeaponInfo} />
          <RockPaperScissors data={fetchWeaponInfo} />
        </>
      </main>
    </GameContextProvider>
  );
}



