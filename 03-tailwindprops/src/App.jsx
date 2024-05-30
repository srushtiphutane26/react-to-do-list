import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "srushti",
    age: 24
  }
  return (
    <>
      <h1 className='bg-blue-200 text-3xl text-black font-bold underline p-4 mb-5'>Vite + React</h1>
      <Card channel="reactCode" someObj = {myObj} />


      {/* <figure class="bg-slate-100 md:flex rounded-xl p-8 dark:bg-slate-800">
      <img class="w-24 h-24 rounded-full mx-auto" 
      src="https://images.pexels.com/photos/23914522/pexels-photo-23914522/free-photo-of-a-roosevelt-elk-lying-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
      alt="" width="384" height="512" />
      <div class="pt-6 space-y-4">
        <blockquote>
          <p class="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale
            on large teams. It’s easy to customize, adapts to any design,
            and the build size is tiny.”
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-sky-500 dark:text-sky-400">
            Sarah Dayan
          </div>
          <div class="text-slate-700">
            Staff Engineer, Algolia
          </div>
        </figcaption>
      </div>
    </figure>     */}
    </>
  )
}

export default App
