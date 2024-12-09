import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoInput from './components/TodoInput'

function App() {
  const [task ,setTask]= useState([]);
  const [editIndex, setEditIndex] = useState(null);


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
        {task.map((taskItem, index)=>(
          <li key={index}>
            {editIndex === index ? (
              <input type="text" defaultValue={taskItem} />
            ) :(
              taskItem
            )}
            <button onClick={()=>{setEditIndex(index)}}>Edit</button>
            <button onClick={()=>{deleteTask(index)}}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
