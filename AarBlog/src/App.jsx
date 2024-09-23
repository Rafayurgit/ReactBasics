import { useEffect, useState } from 'react'
import './App.css'
import {Footer,Header} from "./Components/index"
// import { Footer } from './Components';
// import { Header } from './Components';
import {useDispatch} from 'react-redux'
import authService from './appWrite/auth'

import {logIn, logOut} from "./store/authSlice"
import { Outlet } from 'react-router-dom'

function App() {

  const [loading, setLoading]= useState(true);
  const dispatch= useDispatch();

  useEffect(()=>{
    authService.getCurrentUser().then((userData)=>{
      if(userData){
        useDispatch(logIn({userData}))
      }else{
        useDispatch(logOut())
      }
    }).finally(()=>{setLoading(false)})
  },[])

  return !loading ? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  </div>
): (null);
}

export default App