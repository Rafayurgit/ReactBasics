import { useState } from "react"

function App() {
  const [color, setColor]= useState("black");

  const handelColor=(event)=>{
    console.log("button clicked");
    const color= event.target.style.backgroundColor;
    setColor(color)
  }

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center inset-x-0 px-2 bottom-20">
        <div className="fixed flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
        <button className="px-4 py-2 outline-none shadow-lg text-white rounded-full" style={{backgroundColor: "red" }} onClick={ ()=>setColor("red") }  >Red</button>
        <button className=" rounded-full px-4 py-2 shadow-lg text-white outline-none" style={{backgroundColor:"green"}} onClick={ ()=> {console.log("Button Clicked") ,setColor("green")} } >Green</button>
        <button className="rounded-full px-4 py2 outline-none shadow-lg text-white " style={{backgroundColor: "blue"}} onClick={ handelColor }  > Blue</button> 
        <button className="rounded-full px-4 py2 outline-none shadow-lg text-white " style={{backgroundColor: "purple"}} onClick={handelColor}> purple</button>
        <button className="rounded-full px-4 py2 outline-none shadow-lg text-white " style={{backgroundColor: "black"}}  onClick={handelColor}> Black</button>
        <button className="rounded-full px-4 py2 outline-none shadow-lg text-black " style={{backgroundColor: "yellow"}} onClick={handelColor}> yellow</button>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default App
