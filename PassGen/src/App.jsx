import { useState, useCallback, useEffect, useRef} from 'react'

import './App.css'

function App() {
  const [length, setLength]= useState(7);
  const [numAllow, setNumAllow]= useState(false);
  const [charAllow, setCharAllow]= useState(false);
  const [password, setPassword]= useState("");

  const mainpass=()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllow){
      str+="1234567890"
    }
    if (charAllow){
      str+="!@#$%^&*()"
    }

    for(let i=1; i<length; i++){
      let char= Math.floor(Math.random()*str.length+1)
      pass +=str.charAt(char)
    }

    
    setPassword(pass);
  }

  const passwordGen=useCallback( mainpass , [length, numAllow, charAllow, setPassword])

  useEffect(()=>{
    passwordGen()
  },[length, numAllow, charAllow, passwordGen])

  const passwordRef= useRef(null);

  const copyToClipBoard= useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },[password])


  return (
    <>
      <h1 className='text-xl text-center'>PassWord Generator</h1>

      <div className='w-full max-w-md bg-gray-700 px-4 my-8 py-8 text-orange-500 rounded-md max-w-md  mx-auto' >
        <div className='flex shadow-sm rounded overflow-hidden mb-4' >
          <input type="text" 
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          value={password}
          ref={passwordRef}
          />
          <button className='bg-blue-600 px-2 '
          onClick={copyToClipBoard}
          >COPY</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <divc className='flex items-center gap-x-1'>
            <input 
            className='cursor-pointer'
            type="range" 
            min={7}
            max={27}
            value={length}
            onChange={(e)=>{setLength(e.target.value)}}
             />
             <label htmlFor="">Length:{length}</label>
          </divc>

          <divc className='flex items-center gap-x-1'>
            <input 
            className='cursor-pointer'
            
            id="numInput"
            type="checkbox" 
            onChange={()=>{
              setNumAllow((prev)=> !prev)
            }}
           
            
             />
             <label htmlFor="">Numbers:</label>
          </divc>  

          <divc className='flex items-center gap-x-1'>
            <input 
            className='cursor-pointer'
            
            type="checkbox" 
           
            onChange={()=>{
              setCharAllow((prev)=>!prev)
            }}
             />
             <label htmlFor="">Characters:</label>
          </divc>  
        </div>
      </div>

    </>
  )
}

export default App
