import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  //setcounter is nothing but the name conventing, whatever we have kept name of variable then it is used as setand varibale name 

  //let counter = 15;
  // const addValue = () => {
  //   // console.log("value added", Math.random());
  //   // counter = counter + 1
  //   setCounter(counter + 1)
  //   // console.log(counter);
  // }

  // const removeValue = () => {
  //   setCounter(counter - 1)
  // }

  const addValue = () => {   
      if(counter < 20 ){   
        setCounter(counter + 1)
      }
  }

  const removeValue = () => {
      if(counter > 0 ){
        setCounter(counter - 1)
      }
  }

  return (
    <>
      <h1>Vite + React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick = {addValue} > Add value </button>
      <button onClick = {removeValue} > Remove value </button>
    </>
  )
}

export default App