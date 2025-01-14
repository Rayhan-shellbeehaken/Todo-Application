import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, "Please provide the title"]
    },
    description : {
        type : String,
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    user : {
        type : mongoose.Types.ObjectId,
        ref : "users"
    }
})

const Todo = mongoose.models.todos || mongoose.model("todos",todoSchema);

export default Todo;