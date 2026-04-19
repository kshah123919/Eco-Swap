
function ResultCard({result,searched,showResult,searchitem}){
if(!searched ) return null;
if(!showResult){
    return(
        <p className="mt-4 text-gray-700 font-semibold">❌ {searchitem} </p>
    );
}
if(searched &&  result===null){
    return (
        <p className="mt-4 text-red-500 font-semibold">❌ No eco alternative found. Try items like plastic bottle.</p>
    )
}
if (!showResult && result !== null) {
    return (
      <p className="mt-4 text-gray-700 font-semibold">
        ❌ {searchitem}
      </p>
    );
  }
return (
    <div className="mt-4 p-4 text-center bg-gray-50 rounded-xl w-full shadow-md hover:shadow-xl transition">
        <p className="text-gray-500 line-through flex items-center  justify-center gap-2"> ❌ {searchitem} </p>
         <p className="text-center text-2xl my-2 text-gray-400">↓</p>
       <h3 className="font-semibold text-lg text-gray-800"> {result.alternative}</h3>
       <p className="mt-2 text font-semibold text-base flex items-center gap-2 "> 🌍  {result.impact}</p>
       <p className="mt-3 text-gray-600 font-semibold  text-sm leading-relaxed border-1-4 border-green-300 "> 🌱 {result.why}</p>
       <p className=" mt-2 text-gray-600">💡 Tip: {result.tip}</p> 
    </div>
)
}
export default ResultCard;