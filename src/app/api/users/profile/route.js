import { connect } from "@/app/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import getUserInfo from "@/app/helpers/getUserInfo";
import User from "@/app/models/userModel";

connect();

export async function GET(request) {
    try{
        const userId = getUserInfo(request);
        const user = await User.findOne({_id : userId},{password : 0, __v : 0});
        return NextResponse.json({user : user},{status : 200});
    }catch(error){
        console.log("Error occured to get user information");
        return NextResponse.json({error : error.message},{status : 500});        
    }
}