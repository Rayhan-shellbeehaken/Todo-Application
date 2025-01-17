import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken"
import { jwtVerify } from "jose";

export function getUserInfo(request){
    try{
        const token = request.cookies.get("token")?.value || "";
        if(!token){
          return '';
        }
        const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
        return decodedToken.id;
    }catch(error){
        return NextResponse.json({error : error.message},{status : 500});
    }
}

export async function getUserRole(request) {
    try {
      const token = request.cookies.get("token")?.value || "";
      if (!token) {
        throw new Error("Token not found");
      }

      const secret = new TextEncoder().encode(process.env.SECRET_TOKEN);
      const { payload } = await jwtVerify(token, secret);
  
      return payload;
    } catch (error) {
      console.error("Token verification error:", error);
      return { error: error.message };
    }
  }