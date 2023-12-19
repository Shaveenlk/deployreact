import React, { useState } from 'react'



const Form = () => {

    const[name,SetName] =useState("")

    const handleName = (e) =>{
        console.log(e.target.value)
        SetName(e.target.value)
    }
  return (
    <div>
        <label>
            Name:
            <input type='text' onChange={handleName} value={name}/>
        </label>
        {name}
    </div>
  )
}

export default Form
