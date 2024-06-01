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
          <button className="outline-none px-4 shadow-lg">Red</button>
          <button className="outline-none px-4 shadow-lg">Green</button>
          <button className="outline-none px-4 shadow-lg">Blue</button>
          <button className="outline-none px-4 shadow-lg">Brown</button>
          <button className="outline-none px-4 shadow-lg">Yellow</button>
        </div>  
      </div>
    </>
  )
}

export default colorchange
