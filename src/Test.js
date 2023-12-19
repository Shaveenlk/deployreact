import React from 'react'
import { useState } from 'react';

const Test = () => {
    const[age,setAge] =useState(0);

    const In = ()=>{
        setAge(age+1)
    }
  return (
    <div>
      {age} <button onClick={In}>Increment</button>
    </div>
  )
}

export default Test
