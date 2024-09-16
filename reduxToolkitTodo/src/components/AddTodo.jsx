import react, { useState } from 'react'
import {useDispatch} from "react-redux"
import {addTodo} from "../features/todo/todoSlice"


function AddTodo(){

    const [input , setInput]= useState("");
    const dispatch= useDispatch();

    const addTodoHandler=(e)=>{
        e.preventDefault()
        addTodo(input)
        setInput('')

    }

    return(
        <>
        <form action="" onSubmit={addTodoHandler}>
            <input type="text" placeholder='Enter a todo' 
            value={input}
            onChange={(e)=>setInput(e.target.value) }
            />

            <button>Add Todo</button>
        </form>
        </>
    )
}

export default AddTodo;