import { setup } from "@/lib/mongoDB";

import { NextResponse } from "next/server";

export const GET = async () => {
    const getData = await setup()

    if (getData) {

        return new NextResponse(console.log("error"))
    } else {
        return new NextResponse(console.log("ok"))

    }

}








// if (!process.env.MONGODB_URI) {
//     console.error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// if (process.env.NODE_ENV === 'development') {
//     require('dotenv').config();
// }

