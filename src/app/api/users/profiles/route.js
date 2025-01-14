import { connect } from "@/app/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import User from "@/app/models/userModel";

connect();

export async function GET() {
    try{
        const users = await User.find({},{password : 0, __v : 0});
        return NextResponse.json({users : users}, {status : 200});
    }catch(error){
        console.log("Error occured to get all user info");
        return NextResponse.json({error : error.message}, {status : 500});
    }
}