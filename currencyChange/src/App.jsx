import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setfrom]= useState("usd");
  const [to, setTo]= useState("inr");
  const [convertedAmount, setConvertedAmount]= useState(0);

  const currencyInfo= useCurrencyInfo(from);
  const opttions= Object.keys(currencyInfo); 

  return (
    <>
    <h1 className='text-red-700 bg-blue-50'>Currency Convertor</h1>
    <InputBox/>
    </>
  )
}

export default App
