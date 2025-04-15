import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  

  return (
    <>
     <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white px-4" >
      <div className="max-w-xl mx-auto py-10">
        <h1 className="text-4xl font-bold text-center text-yellow-400 mb-8">My Todo App</h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
    </>
  )
}

export default App
