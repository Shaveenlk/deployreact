import React, { useState } from 'react'

const Test3 = () => {
    const[Clicked1,setClicked1] =useState("HI MY NAME IS PEDRO")

    const show = () =>{
        if (Clicked1=="") {
            setClicked1("HI MY NAME IS PEDRO")
        } else {
            setClicked1("");
        }
    }
    
  return (
    <div>
      <button onClick={show}>Show/hide</button>
      <h1>{Clicked1}</h1>
    </div>
  )
}

export default Test3


