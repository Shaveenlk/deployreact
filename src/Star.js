import React, { useState } from 'react'

const Star = () => {
    const[count,setCount] =useState(90);
    console.log(count)
    console.log(setCount);

    const handleClick =()=>{
        setCount(count+1)
    }
    const handleClickmin =()=>{
        setCount(count-1)
    }

    
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>+</button>
      <button onClick={handleClickmin}>-</button>
    </div>
  )
}

export default Star
