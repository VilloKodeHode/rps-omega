import { RockPaperScissors } from "./pages/RPSpage";
import {  GameContextProvider } from "./data/gameContext";
import { setup } from "@/lib/mongoDB";
import { RPSSplashScreen } from "./components/RPS/SplashScreen";
import { setCookie } from "cookies-next";
import { weaponsInfo } from "./data/weapons";
import { testGameLogic } from "./test/gameLogicTest";




export default async function Home() {

  // const results = await handler()
  const fetchWeaponInfo = await setup()


testGameLogic()



  return (

    <GameContextProvider>
      <main className="flex flex-col items-center justify-between min-h-screen p-24">
        <>
        {/* //TODO: Is the propping neccecery? */}
          <RPSSplashScreen data={fetchWeaponInfo} />
          <RockPaperScissors data={fetchWeaponInfo} />
        </>
      </main>
    </GameContextProvider>
  );
}


