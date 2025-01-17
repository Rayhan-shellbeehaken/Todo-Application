import { connect } from "@/app/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import { getUserInfo } from "@/app/helpers/getUserInfo";
import Todo from "@/app/models/todoModel";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { title, description } = reqBody;

    const userId = await getUserInfo(request);

    const newTodo = new Todo({
      title,
      description,
      user: userId,
    });

    const savedTodo = await newTodo.save();

    return NextResponse.json({
      message: "Successfully added.",
      savedTodo,
    });
  } catch (error) {
    console.log("Error occured in posting tood.");
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    const userId = await getUserInfo(request);

    if (!userId) {
        return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
    }

    const todos = await Todo.find({ user: userId }, { user: 0, __v: 0 });

    return NextResponse.json({ todos: todos }, { status: 200 });
    
  } catch (error) {
    console.log("Error occured in getting all todos");
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(request) {
  try {
    const todoId = request.nextUrl.searchParams.get("todoId");

    const reqBody = await request.json();

    const todo = await Todo.findByIdAndUpdate(todoId, reqBody, {
      new: true,
      runValidators: true,
    });

    return NextResponse.json({
      message: "Successfully updated",
      todo,
    });
  } catch (error) {
    console.log("Error occured to update todo");
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const todoId = request.nextUrl.searchParams.get("todoId");

    const deleteTodo = await Todo.findByIdAndDelete(todoId);

    return NextResponse.json({
      message: "Successfully deleted",
      deleteTodo,
    });
  } catch (error) {
    console.log("Error occured in delete.");
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
