import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();


const connectDB = async() => {

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log(`Mongo DB connection succeeded: ${conn.connection.host}`.green.bold);
    } catch (err) {
        console.log(`Mongo DB connection failed: ${err.message}`.red.bold);
        process.exit(1);
    }
}


export default connectDB;