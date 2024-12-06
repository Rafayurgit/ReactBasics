import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoInput from './components/TodoInput'

function App() {
  const [task ,setTask]= useState([]);

  const addTask=(newTask)=>{
    setTask([...task, newTask]);
  }

  const deleteTask=(index)=>{
    const updatedTask = task.filter((_, i)=> i!== index);
    setTask(updatedTask);
  }


  return (
    <>
      <TodoInput addTask={addTask}/>
      
      <ul>
        {task.map((task, index)=>(
          <li key={index}>
            {task}
            <button onClick={()=>{deleteTask(index)}}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
