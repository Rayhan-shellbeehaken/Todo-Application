import { connect } from "@/app/dbConfig/dbConfig";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
    try{
        const token = request.cookies.get("token");
        const response = NextResponse.json({message : "Successfully logged out"},{status : 200});
        response.cookies.set("token",'',{
            httpOnly : true,
            maxAge : 0
        });
        return response;

    }catch(error){
        console.log("Error occured to connect ");
        return NextResponse.json({error : error.message},{status : 500});
    }
}