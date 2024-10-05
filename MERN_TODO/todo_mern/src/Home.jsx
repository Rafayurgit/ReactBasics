import React, { useState } from 'react'
import Create from './Create'

function Home() {
    const [todos, setTodos]= useState([]);

  return (
    <div className='home'>
      <h1>Todo List</h1>
      <create/>

      {
        todos.length==0 ? <><h1>No Record</h1></>:
        todos.map(todos=>{
            <div>
                {todos}
            </div>
        })
      }


    </div>
  )
}

export default Home
