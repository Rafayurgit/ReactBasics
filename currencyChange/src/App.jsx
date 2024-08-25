import { useState } from 'react'
import InputBox from './components/InputBox'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-red-700 bg-blue-50'>Currency Convertor</h1>
    <InputBox/>
    </>
  )
}

export default App
