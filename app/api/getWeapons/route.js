import { setup } from "@/lib/mongoDB";

import { NextResponse } from "next/server";

// export const GET = async () => {
//     const getData = await setup()

//     if (getData) {

//         return new NextResponse(console.log("error"))
//     } else {
//         return new NextResponse(console.log("ok"))

//     }

// }



import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export const GET = async () => {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const response = client.db("RPS").collection("weaponsInfo");
        const data = await response.find({}).toArray();
        console.log("Data:", data);

        // Close the MongoDB connection after using the data
        
        

        return new NextResponse(console.log("ok"));
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        return new NextResponse(console.log("error"));
    } finally {
        console.log('Disconnected from MongoDB');
        await client.close();
    }
};





// if (!process.env.MONGODB_URI) {
//     console.error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// if (process.env.NODE_ENV === 'development') {
//     require('dotenv').config();
// }

