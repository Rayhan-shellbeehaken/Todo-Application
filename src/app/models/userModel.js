import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : [true, "Please provide email"],
        unique : true
    },
    username : {
        type : String,
        required : [true, "Please provide username"]
    },
    password : {
        type : String,
        required : [true, "Please provide password"]
    },
    role : {
        type : String,
        enum : {
            values : ['admin', 'user'],
            message : `{VALUE} is not a valid type of user` 
        },
        default : 'user'
    }
})

const User = mongoose.models.users || mongoose.model("users",userSchema);

export default User;