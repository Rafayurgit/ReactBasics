import { createContext, useContext } from "react";

export const TodoContext = createContext(
    {

        todos:[
            {
                id:1,
                todoMsg: "message",
                complete: false
            },
        ],
        addTodo: (todo)=>{},
        deleteTodo:(id)=>{},
        updateTodo:(id,todo)=>{},
        toggleTodo:(id)=>{}
    
    
    }
); 
export const TodoProvider= TodoContext.Provider;

export const useTodo = () => {
    return(
        useContext(TodoContext)
    )
}

