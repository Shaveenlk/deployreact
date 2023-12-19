import React, { useState } from 'react'

const Test2 = () => {
    const[type,settype] =useState("");

    const Textbaba=(e)=>{
        settype(e.target.value)
    }
  return (
    <div>
      <input type='text' onChange={Textbaba}/>
      <h1>{type}</h1>
    </div>
  )
}

export default Test2
