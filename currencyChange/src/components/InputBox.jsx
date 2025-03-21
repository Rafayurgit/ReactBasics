import {useState, useId} from "react";


function InputBox({
  label,
  className,
  amount,
  onAmountChange,
  disableAmount,

  currencyOptions=[],
  selectCurrenct="usd",
  onCurrecnyChange,
  disableCurrency,
  
  className = "",
}) {

  const amountInputId= useId();

  return (
      <div className={`bg-white p-3 rounded-lg text-sm flex `}>
          <div className="w-1/2">
              <label htmlFor="amountInputId"  className="text-black/40 mb-2 inline-block">
                  {label}
              </label>
              <input
                  
                  id="amountInputId"
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  placeholder="Amount"
                  disabled={disableAmount}
                  onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                  value={amount}
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  value={currencyOptions}
                  onChange={(e)=>onCurrecnyChange && onCurrecnyChange(e.target.value)}
                  disabled={disableCurrency}
              >
                {currencyOptions.map((currency)=> (
                  <Option key={currency} value={currency} >
                    {currency}
                  </Option>
              ))}
              
              </select>
          </div>
      </div>
  );
}

export default InputBox;
