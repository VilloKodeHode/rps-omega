


import { RockPaperScissors } from "./pages/RPSpage";
import { GameButton } from "./components/Buttons/GameButtons";
import { GameContext, GameContextProvider } from "./data/gameContext";
import handler from "./db/mysqlConnection";
import { setup } from "@/lib/mongoDB";







export default async function Home() {

  // const results = await handler()
  const fetchWeaponInfo = await setup()
  console.log("data from mongoDB:", fetchWeaponInfo[0])

  return (

 <GameContextProvider>
      <main className="flex flex-col items-center justify-between min-h-screen p-24">
        <RockPaperScissors data={fetchWeaponInfo} />
        {/* <GameButton weapon="fire"/> */}
        {/* <div className="absolute bottom-0 left-0 p-8">{data[0].darkColor}</div> */}
      </main>
    </GameContextProvider>
  );
}



