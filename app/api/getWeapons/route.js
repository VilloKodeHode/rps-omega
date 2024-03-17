import { setup } from "@/lib/mongoDB";
import { NextResponse } from "next/server";


//! Not currently in use
export const GET = async () => {
    const getData = await setup()
    if (getData) {
        return new NextResponse(getData)
    } else {
        return new NextResponse(console.log("could not get data"))

    }

}