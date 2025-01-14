import { connect } from "@/app/dbConfig/dbConfig";
import User from "@/app/models/userModel";
import { NextResponse } from "next/server";
import getUserInfo from "@/app/helpers/getUserInfo";

connect();

export async function GET(request) {
    try{
        const decodedToken = getUserInfo(request);
        return NextResponse.json({decoded : decodedToken},{status : 200});
    }catch(error){
        console.log("Error occured to get user information");
        return NextResponse.json({error : error.message},{status : 500});        
    }
}