import mongoose from "mongoose";


export default async function connection(){
    const db=await mongoose.connect('mongodb+srv://vavag77429:SR8a0pYdMlwjAwmd@cluster0.pwmvz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/crud');
    console.log("database connected");
    
    return db
}