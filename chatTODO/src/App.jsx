import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoInput from './components/TodoInput'

function App() {

  const [completedTask, setCompletedTask] =  useState([]);

  const [task ,setTask]= useState(()=>{
    const savedTasks= localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

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

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(task));
  },[task])


  return (
    <>
    <TodoInput addTask={addTask}/>
    {task.length === 0 ? (
        <p style={{ fontStyle: "italic", color: "gray" }}>No tasks to show</p>
    ) : (
      <ul>
        {task.map((taskItem, index)=>(
          <li key={index} style={{textDecoration: completedTask.includes(index) ? "line-through": "none"}}>
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

            <button onClick={()=>{
              if(completedTask.includes(index)){
                setCompletedTask(completedTask.filter((i)=> i!== index ));
              }else{
                setCompletedTask([...completedTask, index]);
              }
            }}>
              {completedTask.includes(index) ? "Undo": "Complete" }
            </button>

          </li>
        ))}
      </ul>
    ) }
    </>
  )
}

export default App
