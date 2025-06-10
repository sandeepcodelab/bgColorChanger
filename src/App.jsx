import { useState } from 'react'
import './App.css'

function App() {

  const [bgColor, setBgColor] = useState("bg-emerald-500")

  return (
    <div className={`${bgColor} w-full h-screen flex justify-center`}>
      <div>
        <h1 className={`text-4xl font-bold text-center pt-8 ${(bgColor === 'bg-black')? 'text-white': 'text-black'}`}>Background Color Changer</h1>
        <div className='md:w-2xl m-auto flex flex-wrap justify-center gap-3 pt-10'>
          <button 
            className='bg-red-500 w-18 h-18 rounded-full border-2 border-white cursor-pointer' 
            onClick={() => setBgColor("bg-red-500")}
          ></button>
          <button 
            className='bg-green-500 w-18 h-18 rounded-full border-2 border-white cursor-pointer' 
            onClick={() => setBgColor("bg-green-500")}
          ></button>
          <button 
            className='bg-yellow-500 w-18 h-18 rounded-full border-2 border-white cursor-pointer' 
            onClick={() => setBgColor("bg-yellow-500")}
          ></button>
          <button 
            className='bg-blue-500 w-18 h-18 rounded-full border-2 border-white cursor-pointer' 
            onClick={() => setBgColor("bg-blue-500")}
          ></button>
          <button 
            className='bg-pink-500 w-18 h-18 rounded-full border-2 border-white cursor-pointer' 
            onClick={() => setBgColor("bg-pink-500")}
          ></button>
          <button 
            className='bg-purple-500 w-18 h-18 rounded-full border-2 border-white cursor-pointer' 
            onClick={() => setBgColor("bg-purple-500")}
          ></button>
          <button 
            className='bg-indigo-500 w-18 h-18 rounded-full border-2 border-white cursor-pointer' 
            onClick={() => setBgColor("bg-indigo-500")}
          ></button>
          <button 
            className='bg-orange-500 w-18 h-18 rounded-full border-2 border-white cursor-pointer' 
            onClick={() => setBgColor("bg-orange-500")}
          ></button>
          <button 
            className='bg-gray-500 w-18 h-18 rounded-full border-2 border-white cursor-pointer' 
            onClick={() => setBgColor("bg-gray-500")}
          ></button>
          <button 
            className='bg-black w-18 h-18 rounded-full border-2 border-white cursor-pointer' 
            onClick={() => setBgColor("bg-black")}
          ></button>
          <button 
            className={`bg-white w-18 h-18 rounded-full border-2 ${(bgColor === 'bg-white')? 'border-black' : 'border-white'} cursor-pointer`} 
            onClick={() => setBgColor("bg-white")}
          ></button>
          <button
            className='bg-teal-500 w-18 h-18 rounded-full border-2 border-white cursor-pointer'
            onClick={() => setBgColor("bg-teal-500")}
          ></button>
          <button
            className='bg-lime-500 w-18 h-18 rounded-full border-2 border-white cursor-pointer'
            onClick={() => setBgColor("bg-lime-500")}
          ></button>
          <button
            className='bg-cyan-500 w-18 h-18 rounded-full border-2 border-white cursor-pointer'
            onClick={() => setBgColor("bg-cyan-500")}
          ></button>
          <button
            className='bg-rose-500 w-18 h-18 rounded-full border-2 border-white cursor-pointer'
            onClick={() => setBgColor("bg-rose-500")}
          ></button>
        </div>
      </div>
    </div>
  )
}

export default App
