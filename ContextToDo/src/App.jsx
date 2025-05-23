import { useState, useEffect } from "react";
import "./App.css";
import { TodoProvider } from "./Contexts/Todocontext";
import TodoForm from "./components/TodoFrom";
import  TodoItem from "./components/TodoItem";
import { data } from "autoprefixer";

function App() {
  const [todos, setTodos]= useState([])

  const addTodo=(todo)=>{
    setTodos((preVtodo)=> [{id: Date.now() , ...todo }, ...preVtodo])
  }

  const deleteTodo=(id)=>{
    setTodos((previosTodod)=>{
      return previosTodod.filter((todo)=>{
        return todo.id !==id
      })
    })
  }

  const updateTodo=(id, todo)=>{
    setTodos( (prevTodo)=>{
      return prevTodo.map((todos)=>{
        return todos.id ===id ? todo: todos
      })
    })
  }

  const toggleTodo=(id)=>{
    setTodos((prevTodo)=> prevTodo.map((todo)=> {
      return todo.id===id ? {...todo, complete: !todo.complete }:todo
    }))
  }

  useEffect(()=>{
    const todos= JSON.parse( localStorage.getItem("todos"))

    if(todos && todos.length >0){
      setTodos(todos)
    }

  }, [])

  useEffect(()=>{
    localStorage.setItem("todos" ,JSON.stringify(todos))
  }, [todos])

  // useEffect(()=>{
  //   const todos= JSON.parse(localStorage.getItem("todos"))

  //   if(todos && todos.length>0) {
  //     setTodos(todos)
  //   }
  // },[])

  // useEffect(()=>{
  //   localStorage.setItem("todos", JSON.stringify(todos))
  // },[todos])
  

  return (
    <TodoProvider value={{todos, addTodo, deleteTodo, updateTodo,toggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
               <div key={todo.id}>
                <TodoItem/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
