import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        const connectionInstance=await mongoose.connect(process.env.DB_URL);
        console.log(`The database has connected successfully ${connectionInstance.connection.name}`);
    } catch (error) {
        console.log(`Error while connecting to the database ${error}`);
    }
}

export default connectDB;