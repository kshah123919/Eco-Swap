 
import { useState } from "react";

 function InputForm({onSearch}) {
    const [input,setInput]=useState("");
    const handleClick=()=>{
        console.log(input)
        onSearch(input);
    }
    const suggestion=["plastic bottle","plastic bag","plastic cup"]
   
    return (
        <div className="w-full">

             <div className="flex gap-2">
            <input  className='border p-2 rounded-lg w-full focus:outline-none'type="text" placeholder="Enter item.."  value={input} onChange={(e)=>setInput(e.target.value)}></input>
            <button className=' bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition'onClick={handleClick}>Search</button>
             </div>

             <div className="flex gap-2 mt-3 flex-wrap">
                {suggestion.map((item,index)=>(
                <span key={index} onClick={()=>onSearch(item)} className="bg-gray-200 px-3 py-1 rounded-full text-sm cursor-pointer">{item}</span>
                ))}
             </div>

        </div>
              
       
    );
 }
 export default InputForm