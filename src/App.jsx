import { useState } from 'react'
import InputForm from './components/InputForm'; 
import ecoData from './data/ecoData';
import bg from './assets/image.png'
import ResultCard from './components/ResultCard';
function App() {

 const [result,setresult]=useState(null)
 
 const [searched,setsearched]=useState(false)
 const [showResult,setShowResult]=useState(false)
 const[searchitem,setsearchitem]=useState("")
const handleSearch=(value)=>{
  console.log("From App ", value);
  const key=value.toLowerCase().trim()
  const data=ecoData[key]

  setsearched(true)
  setsearchitem(value)

  if(key in ecoData){
  setresult(data)
   setShowResult(false)
  setTimeout(()=>{
    setShowResult(true)
  },400)

}else{
  setresult(null)
  setShowResult(true)
}
}


  return (
    <div className=' min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-green-200 to-green-300 transition-all duration-500' style={{backgroundImage:`url(${bg})`}}>

      <div className='bg-white p-6 rounded-2xl shadow-lg w-96 border border-green-200 transform transition duration-300 hover:scale-105 hover:shadow-2xl' >
      <h1 className='text-2xl font-bold text-green-700 text-center mb-4 animate-fadeIn'> 🌍 Eco Swap</h1>
      <h2 className='text-center font-semibold mb-4'>Swap daily items for eco-friendly alternatives</h2>
     <InputForm onSearch={handleSearch}/>
     <ResultCard result={result} searched={searched} showResult={showResult} searchitem={searchitem}/>

      </div>
      
    </div>
  )
}

export default App
