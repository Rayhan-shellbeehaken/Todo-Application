import mongoose from "mongoose";

export async function connect() {
    try{
        mongoose.connect(process.env.MONGO_URI);
        const connection = mongoose.connection;

        connection.on('connection', () => {
            console.log('Database connected successfully!!');
        })

        connection.on('error', () => {
            console.log('Failed to connect to database.');
            process.exit();
        })
    }catch(error){
        console.log('Error occured in database connection...');
        console.log(error);
    }
}