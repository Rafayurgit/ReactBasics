import React, { useState } from 'react'

function TodoInput() {

    const [input, setInput]= useState("");
    const handelSubmit= ()=>{
        if(input.trim()=== ""){
            alert("Task cannot be empty");
            return;
        }
        setInput("");
    }

  return (
    <div>
      <input type="text"  
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      placeholder='Enter new task'/>
      <button onClick={handelSubmit}>Add Task</button>
    </div>
  )
}

export default TodoInput
