'use server';
import React from 'react'
import Todo from './Todo'
import getAllTodos from '../helpers/getTodos'
import { use } from 'react'; 


export default async function TodoList() {
  return (
    <div>
        <Todo/>
        <Todo/>
    </div>
  )
}
