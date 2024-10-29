import mongoose from "mongoose";

type ConnectionObjet = {
    isConnected?:number
}

const connection:ConnectionObjet = {}


async function dbConnect(): Promise<void>{
    if(connection.isConnected){
        console.log("Already connected tp db")
        return
    }
   try {
     const db = await mongoose.connect(process.env.MONG_URI as string, {})
     connection.isConnected = db.connections[0].readyState
     console.log("DB Connected successfully")
   } catch (error) {
     console.log("Db connection failed",error);
     process.exit(1);
   }
}

export default dbConnect