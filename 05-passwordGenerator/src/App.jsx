import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef - to copy the password and copy it to clipboard
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) string += "0123456789"
    if (charAllowed) string += "!@#$%^&*(){}[]<>~"

    for (let i = 0; i <= length; i++) {
      let characterValue = Math.floor(Math.random() * string.length + 1)
      pass += string.charAt(characterValue)
      
    }
    setPassword(pass)
  } , [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator ])

  // password copy to clipboard
  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select() // this ?.select() is use for the user experience purpose, when user select copy button then the text is selected 
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      
      <div className='w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-4 mx-5 bg-slate-800 text-white'>
        <h1 className="text-4xl pb-4">
          Password Generator
        </h1>
        <div className='flex shadow-lg rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password}
          className='outline-none text-black w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef} />
          <button onClick={copyPasswordToClipBoard} className='outline-none bg-blue-500 text-white px-3 py-1 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-4'>
          <div className='flex items-center gap-x-5'>
            <input type="range"
            min={6}
            max={15}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}} /> 
            {/* range will work when we give input onChange event, and pass the event and that event will pass setLength */}
            <label className='text-xl'>Length: {length}</label>
          </div>

          <div className='flex text-sm gap-x-2'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
                }} /> 
              {/* same....setnumberallowed, prev value usko reverse kar do */}
              <label htmlFor="numberInput" className='text-xl'>Numbers</label>
          </div>
          <div className='flex text-sm gap-x-2'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
                }} /> 
              <label htmlFor="characterInput" className='text-xl'>Characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
