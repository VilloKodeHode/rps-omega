
import { setCookie } from "cookies-next";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export const setup = async () => {


    try {
        await client.connect();
        console.log("connected to MongoDB");
     

        const response = client.db("RPS").collection("weaponsInfo")
        const data = await response.find({}, { projection: { _id: 0 }}).toArray()
        console.log("data fetched:", data);
      
        return data
        
   

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        console.log("Data should be gotten now, setting 5 seconds to disconnect")
        setTimeout(() => {
            client.close();
            console.log('Disconnected from MongoDB');    
        }, 5000)
        
    }
}











