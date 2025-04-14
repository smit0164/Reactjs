import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [selectnumber,setNumber]=useState(false);
  const [selectspecialcharacter,setCharacter]=useState(false);
  const [password,setPassword]=useState();

  const passwordGenerator=useCallback(()=>{
    
    const letter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number="0123456789";
    const speicalcharcter="!@$$%^&*";
    let string=letter;
    let generatePassword="";
   
    if(selectnumber){
       string=string+number;
    }
    if(selectspecialcharacter){
      string =string+speicalcharcter;
    }
    
     for (let i=0;i<length;i++){
        let randomIndex = Math.floor(Math.random() * string.length);
        
        generatePassword+=string.charAt(randomIndex);
     }
     setPassword(generatePassword)
  },[length,selectnumber,selectspecialcharacter]);

  useEffect(() => {
    passwordGenerator();
  }, [length,selectnumber,selectspecialcharacter,passwordGenerator]);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
          <h1 className="font-bold text-center text-4xl mb-6 text-gray-800">Password Generator</h1>
          
          <div className="mb-4">
            <label className="block mb-2 text-gray-700 font-medium">Generated Password</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100"
              placeholder="Your secure password"
              value={password}
              readOnly
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700 font-medium">Password Length</label>
            <input
              type="range"
              min="4"
              max="32"
              className="w-full"
              value={length}
              onChange={(e)=>{
                setLength(e.target.value)}
              }
            />
            <span>({length})</span>
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="includeNumbers"
              className="mr-2 accent-blue-500"
              onChange={(e)=>{setNumber((prev)=>!prev)}}
            />
            <label htmlFor="includeNumbers" className="text-gray-700">Include Numbers</label>
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="includeCharacters"
              className="mr-2 accent-blue-500"
              onChange={(e)=>{setCharacter((prev)=>!prev)}
              }
            />
            <label htmlFor="includeCharacters" className="text-gray-700">Include Special Characters</label>
          </div>

        
        </div>
      </div>
    </>
  )
}

export default App
