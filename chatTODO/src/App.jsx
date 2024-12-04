import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoInput from './components/TodoInput'

function App() {
  const [task ,setTask]= useState([]);


  return (
    <>
      <TodoInput/>
      
      <ul>
        {task.map((task, index)=>(
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  )
}

export default App
