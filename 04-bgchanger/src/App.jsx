import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'



function colorchange() {
  const [color, setColor] = useState("pink")

  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor: color}} ></div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 text-black">
        <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-3 rounded-xl">
          <button onClick={() => setColor("red")} className="outline-none px-4 shadow-lg rounded-full text-white" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={() => setColor("green")}  className="outline-none px-4 shadow-lg rounded-full text-white" style={{backgroundColor:"green"}}>Green</button>
          <button onClick={() => setColor("blue")}  className="outline-none px-4 shadow-lg rounded-full text-white" style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={() => setColor("brown")} className="outline-none px-4 shadow-lg rounded-full text-white" style={{backgroundColor:"brown"}}>Brown</button>
          <button onClick={() => setColor("orange")} className="outline-none px-4 shadow-lg rounded-full text-white" style={{backgroundColor:"orange"}}>Orange</button>
        </div>  
      </div>
    </>
  )
}

export default colorchange
