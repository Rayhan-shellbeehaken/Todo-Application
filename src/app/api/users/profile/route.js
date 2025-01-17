import { connect } from "@/app/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import {getUserInfo} from "@/app/helpers/getUserInfo";
import User from "@/app/models/userModel";

connect();

export async function GET(request) {
    try{
        const userId = await getUserInfo(request);
        if(!userId){
            return NextResponse.json({message : 'Login first'},{status : 400});
        }
        const user = await User.findOne({_id : userId},{password : 0, __v : 0});
        return NextResponse.json({user : user},{status : 200});
    }catch(error){
        console.log("Error occured to get user information");
        return NextResponse.json({error : error.message},{status : 500});        
    }
}

export async function PATCH(request) {
    try{
        const reqBody = await request.json();
        const userId = await getUserInfo(request);

        if(!userId)
            return NextResponse.json({message : 'Sorry, login first'},{status : 400});

        const user = await User.findByIdAndUpdate(userId, reqBody, {
            new: true,
            runValidators: true,
        });

        return NextResponse.json({message : 'Successfully updated', user},{status : 200});

    }catch(error){
        console.log("Error in updating user info");
        return NextResponse.json({error : error.message},{status : 500});
    }
}