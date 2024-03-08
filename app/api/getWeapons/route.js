import { setup } from "@/lib/mongoDB";
import { MongoClient } from "mongodb";

import { NextResponse } from "next/server";

export const GET = async () => {
  
    const getData = await setup()
 
    if (getData) {
     
        return new NextResponse(console.log("ok"))
    } else {
   
        return new NextResponse(console.log("error"))

    }

}




const client = new MongoClient(process.env.MONGODB_URI);

export const setup = async () => {


    try {
        await client.connect();
        console.log("connected to MongoDB");
     

        const response = client.db("RPS").collection("weaponsInfo")
        const data = await response.find({}).toArray()
        // console.log("data:", data)
        // console.log("data[0]:", data[0])
        await client.close();
        console.log('Disconnected from MongoDB');
   
        return data

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}





// if (!process.env.MONGODB_URI) {
//     console.error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// if (process.env.NODE_ENV === 'development') {
//     require('dotenv').config();
// }

