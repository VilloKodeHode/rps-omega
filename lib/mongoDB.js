
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export const setup = async () => {


    try {
        await client.connect();
        console.log("connected to MongoDB");
     

        const response = client.db("RPS").collection("weaponsInfo")
        const data = await response.find({}).toArray()
        await client.close();
        console.log('Disconnected from MongoDB');
   
        return data

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}











