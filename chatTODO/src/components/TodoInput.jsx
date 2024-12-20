import React, { useState } from 'react'

function TodoInput({addTask}) {

    const [input, setInput]= useState("");
    const handelSubmit= ()=>{
        if(input.trim()=== ""){
            alert("Task cannot be empty");
            return;
        }
        addTask(input);
        setInput("");
    }

  return (
    <div>
      <input type="text"  
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      placeholder='Enter new task'
      onKeyDown={(e)=>{
        if(e.key==="Enter") handelSubmit();
      }} 
      />
      <button onClick={handelSubmit}>Add Task</button>
    </div>
  )
}

export default TodoInput
