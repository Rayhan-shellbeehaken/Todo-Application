import { connect } from "@/app/dbConfig/dbConfig";
import User from "@/app/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request) {
    try{
        const reqBody = await request.json();
        const {email, password} = reqBody;

        const user = await User.findOne({email : email});

        if(!user)
            return NextResponse.json({message : "User doesn't exist"}, {status : 400});
        
        const isValid = await bcryptjs.compare(password, user.password);

        if(!isValid)
            return NextResponse.json({message : "Wrong credentials."}, {status : 400});

        const tokenPayload = {
            id : user._id,
            role : user.role
        }

        const token = jwt.sign(tokenPayload,process.env.SECRET_TOKEN, {expiresIn : '1h'});

        const response = NextResponse.json({message : "Successfully logged in."},{status : 200});

        response.cookies.set("token", token, {
            httpOnly : true
        });

        return response;
        

    }catch(error){
        console.log("Error occured in login request.");
        return NextResponse.json({error : error.message}, {status : 500});
    }
}