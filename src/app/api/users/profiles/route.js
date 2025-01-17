import { connect } from "@/app/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import User from "@/app/models/userModel";
import {getUserInfo} from "@/app/helpers/getUserInfo";

connect();

export async function GET(request) {
    try{
        const userId = await getUserInfo(request);

        const user = await User.findOne({_id : userId},{password : 0, __v : 0});

        if(!user)
            return NextResponse.json({message : "Age login kor"},{status : 400});

        if(user.role !== 'admin')
            return NextResponse.json({message : "User don't have permission to access that"}, {status : 400});
        
        const users = await User.find({role : 'user'},{password : 0, __v : 0});
        return NextResponse.json({users : users}, {status : 200});
    }catch(error){
        console.log("Error occured to get all user info");
        return NextResponse.json({error : error.message}, {status : 500});
    }
}