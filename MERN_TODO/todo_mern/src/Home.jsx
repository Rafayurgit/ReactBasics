import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios';

function Home() {
    const [todos, setTodos]= useState([]);

    useEffect(()=>{
      axios.get('http://localhost:3001/get')
      .then(result => setTodos(result.data))
      .catch(err=> console.log(err));
      
    },[])

  return (
    <div className='home'>
      <h1>Todo List</h1>
      <Create/>
      {
        todos.length===0 ? <><h1>No Record</h1></>:
        todos.map(todos=>{
            <div>
                {todos.task}
            </div>
        })
      }


    </div>
  )
}

export default Home
