import { connect } from "@/app/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import { getUserRole } from "@/app/helpers/getUserInfo";
import User from "@/app/models/userModel";

connect();

export async function DELETE(request) {
    try{
        const user = await getUserRole(request);
        if(!user)
            return NextResponse.json({message : 'Go to hell'},{status : 400});
        const userId = request.nextUrl.searchParams.get("userId");
        const deleteUser = await User.findByIdAndDelete(userId);
        return NextResponse.json({message : 'Successfully deleted', deleteUser},{status : 200});
    }catch(error){
        console.log('Error in deleting user');
        return NextResponse.json({error : error.message},{status : 500});
    }
}
