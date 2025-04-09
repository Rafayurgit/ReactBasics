import React from 'react'
import { useState } from 'react';
import { useTodo } from '../Contexts';

function TodoForm() {

    const [todoMsg, setTodoMsg] = useState([])
    const {addTodo} = useTodo()

    handelSubmit=()=>{
        e.preventDefault();

        if(!todo) return
        addTodo({todoMsg, complete: false})
        setTodoMsg("")

    }

    return (
        <form  className="flex" onSubmit={handelSubmit}>
            <input 
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e)=> setTodoMsg(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

