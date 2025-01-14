import { connect } from "@/app/dbConfig/dbConfig";
import User from "@/app/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request) {
    try{
        const reqBody = await request.json();
        const {username, email, password, role = 'user'} = reqBody;

        const user = await User.findOne({email : email});

        if(user)
            return NextResponse.json({message : 'User already exist.'},{status : 400});

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        console.log("hashed password : "+hashedPassword);
        const newUser = new User({
            username,
            email,
            password : hashedPassword,
            role
        });

        const savedUser = await newUser.save();

        return NextResponse.json({
            message : "Successfully registerd.",
            savedUser
        });

    }catch(error){
        console.log('Error in user post request.');
        console.log(error);
        return NextResponse.json({error : error.message},{status : 500});
    } 
}