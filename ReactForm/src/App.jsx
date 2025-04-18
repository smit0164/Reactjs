import { useState } from 'react'
import { useForm } from 'react-hook-form'

function App() {
  const {register,handleSubmit}=useForm()
  const onSubmit=(data)=>console.log(data)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
       <input {...register("firstName",{required:true,maxLength:20})}/>
       <input type="number" {...register("age", { min: 18, max: 99 })} />
       <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="ohter">other</option>
       </select>
       <input type="submit"/>
    </form>
  )
}

export default App
