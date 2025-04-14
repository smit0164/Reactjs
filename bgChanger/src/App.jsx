import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("red")

  return (
    <div className="w-full h-screen  " style={{backgroundColor:color}}>
        <div className="w-full bg-amber-50 h-16 px-4 rounded-2xl flex gap-5 items-center">
            <button onClick={()=>setColor('white')} className="bg-white text-black px-4 py-2 rounded-3xl">White</button>
            <button onClick={()=>setColor('Blue')} className="bg-blue-500 text-white px-4 py-2 rounded-3xl">Blue</button>
            <button onClick={()=>setColor('Yellow')} className="bg-amber-500 text-white px-4 py-2 rounded-3xl">Yellow</button>
        </div>
     </div>
  
  )
}

export default App
