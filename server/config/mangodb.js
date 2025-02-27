import mongoose from "mongoose";
import 'dotenv/config'


//connect to the MongoDB database

const connectDB = async () => {
    mongoose.connection.on('connected', ()=> console.log('DataBase Connected'))

        await mongoose.connect(`${process.env.MONGODB_URI}/myFirstProject`);
       
      
    };


export default connectDB