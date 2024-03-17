import { RockPaperScissors } from "./pages/RPSpage";
import { GameContextProvider } from "./data/gameContext";
import { setup } from "@/lib/mongoDB";
import { RPSSplashScreen } from "./components/RPS/SplashScreen";
import { testGameLogic } from "./test/gameLogicTest";




export default async function Home() {
  const fetchWeaponInfo = await setup()
  testGameLogic()
  return (

    <GameContextProvider>
      <main className="flex flex-col items-center justify-between min-h-screen p-24">
        <>
          <RPSSplashScreen />
          <RockPaperScissors data={fetchWeaponInfo} />
        </>
      </main>
    </GameContextProvider>
  );
}


