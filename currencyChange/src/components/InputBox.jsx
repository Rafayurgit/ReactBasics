import React from 'react'
import { useId } from 'react'

function InputBox({
label,
amount,
selectCurrency="usd",
onAmountChange,
onCurrencyChange,
amountDisable=false,
currencyDisable=false,
currencyOptions=[],
className=""
}) {

    const amountInputId=useId();


  return (
    <div className={`felx text-sm bg-white p-3 rounded-xl ${className}`}>
      <div className='w-1/2'>
      <label  className='text-black/40 mb-2 inline-block' htmlFor={amountInputId}>From
      {label}
      </label>
      <input id={amountInputId} className='outline-none w-full bg-transparent py-1.5'
      type='number'
      placeholder='Amount'
      value={amount}
      disabled={amountDisable}
      onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
      />
      </div>

      <div className='w-1/2 flex flex-wrap justify-end text-right'>
      <p className='text-black/40 mb-2 w-full'>CurrencyType</p>
      <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
      value={selectCurrency}
      onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
      disabled={currencyDisable}
      >
        {currencyOptions.map((currency)=>(
            <option key={currency}value={currency}>
             {currency}   
            </option>
        ))}
        
        
        <option value="">
            usd
        </option>
      </select>
      </div>
    </div>
  )
}

export default InputBox
