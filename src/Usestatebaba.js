import React, { useEffect, useState } from 'react'




const Usestatebaba = () => {
    const[Clicked,setClicked] =useState();
    const[Count,setCount] =useState(0);


    useEffect(()=>{
        console.log("Amme");
    
    return(
        ()=>{
            console.log("koko")
        }
    )
},[Clicked,Count]);
  return (
    <div>
      <button onClick={()=>setClicked("Subscribe")}>Subscribe</button>
      <br/>
      <hr/>
      <button onClick={()=>setClicked("To")}>To</button>
      <br/>
      <hr/>
      <button onClick={()=>setClicked("DropXoUT")}>DropXoUt</button>
      <h1>{Clicked}</h1>
      <button onClick={()=>setCount(Count+1)}>Increment</button>
      <h1>{Count}</h1>
    </div>
  )
}

export default Usestatebaba
