import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken"

export default function getUserInfo(request){
    try{
        const token = request.cookies.get("token")?.value || "";
        const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
        console.log(decodedToken);
        return decodedToken;
    }catch(error){
        return NextResponse.json({error : error.message},{status : 500});
    }
}