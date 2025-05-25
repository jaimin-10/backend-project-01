import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

/**
 * Logic of DB connection.
 * 
 * Note:
 *  1. Always connect DB under try-catch
 *  2. DB could be in any continent so always use Async-Await 
 * 
 * Also, DB connection returns one object, explore by own (EBO)
 */

const connectDB = async () => {
    try {
        let mongoConnectedInstance =await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log("Connetion Instance::: ", mongoConnectedInstance); // EBO
        console.log(`Mongo DB connected!! DB Host: ${mongoConnectedInstance.connection.host}`); // Used check on what HOST DB is connected
    } catch (error) {
        console.log("Failed to connect:", error);
        process.exit(1); // EBO
    }
}

export default connectDB