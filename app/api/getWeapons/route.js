import { setup } from "@/lib/mongoDB";

import { NextResponse } from "next/server";

export const GET = async () => {
    const getData = await setup()

    if (getData) {

        return new NextResponse(getData)
    } else {
        return new NextResponse(console.log("could not get data"))

    }

}









// import { MongoClient } from "mongodb";
// import { NextResponse } from "next/server";

// const client = new MongoClient(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const connectToMongoDB = async () => {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB");
//     return true;
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error.message);
//     return false;
//   }
// };

// const getDataFromMongoDB = async () => {
//   try {
//     const response = client.db("RPS").collection("weaponsInfo");
//     const data = await response.find({}, { projection: { _id: 0 }}).toArray();
//     console.log("Data:", data);
//     return data;
//   } catch (error) {
//     console.error("Error retrieving data from MongoDB:", error.message);
//     throw error; // Re-throw the error to handle retries
//   }
// };

// export const GET = async () => {
//   let connected = await connectToMongoDB();

//   // Retry if connection fails
//   while (!connected) {
//     console.log("Retrying connection in 5 seconds...");
//     await new Promise((resolve) => setTimeout(resolve, 5000));
//     connected = await connectToMongoDB();
//   }

//   try {
//     const data = await getDataFromMongoDB();
//     console.log("Data:", data);

//     // Handle the retrieved data as needed

//     return new NextResponse(console.log("ok"));
//   } catch (error) {
//     console.error("Error handling MongoDB data:", error.message);
//     return new NextResponse(console.log("error"));
//   } finally {
//     console.log("Disconnected from MongoDB");
//     await client.close();
//   }
// };
