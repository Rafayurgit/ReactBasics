import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoInput from './components/TodoInput'

function App() {
  const [task ,setTask]= useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");


  const addTask=(newTask)=>{
    if(newTask.trim()===""){
      alert("Task Can not be empty !");
      return;
    }

    if(newTask.includes(task)){
      alert("Task already exist !");
      return;
    }

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
              <input type="text" 
              value={editText} 
              onChange={(e)=>setEditText(e.target.value)}
              
              />
            ) :(
              taskItem
            )}
            
            <button onClick={()=>{
              setEditIndex(editIndex === index ? null : index)
            }}>{editIndex===index ? "cancel" : "Edit" }</button>
            <button onClick={()=>{
              const updatedTask = task.map((t,i)=>(i===index ? editText: t));
              setTask(updatedTask);
              setEditIndex(null);
              setEditText("");
            }}>Save</button>
            <button onClick={()=>{deleteTask(index)}}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
