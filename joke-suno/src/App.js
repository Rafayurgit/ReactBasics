import {usestate, useEffect, useState} from 'react'
import './App.css';

function App() {
  const [joke, setJoke]= useState('');
  const [isLoading, setIsLoading]= useState(false);
  const [error, setError]= useState(null);





  const handelSubmit= async ()=>{
    //https://api.freeapi.app/api/v1/public/randomjokes
    setIsLoading(true);
    setError(null);

    try{
      const result = await fetch('https://api.freeapi.app/api/v1/public/randomjokes').then(result=> result.json());
      
      if(result.success && result.data && result.data.data){
        const jokesArray= result.data.data;
        const randomIndex = Math.floor(Math.random()* jokesArray.length )
        const jokeContent= jokesArray[randomIndex].content;
       // const newJokes= 
        
        setJoke(jokeContent);
      }else{
        throw new Error ("Failed to fetch joke");
      }

    }catch(err){
      setError(err.message)
    }finally{
      setIsLoading(false);
    }

  }

  // useEffect(  ()=>{

    
    
  // }, [])

  return (
   <div>
    <div className='container'>
      {
      isLoading ? (<p>loading...</p> )
      : error ? (<p>{error} </p>)
      :(<span>{joke}</span>)
      }
    </div>

    <div className='button-container'>
      <button onClick={handelSubmit} disabled={isLoading}>Tell me a joke</button>
    </div>
   </div>
  );
}

export default App;
