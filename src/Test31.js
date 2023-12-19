import React, { useState } from 'react'

const Test31 = () => {
  const[showText,setshowText] =useState(true);

  return (
    <div>
      <button onClick={()=>{
        setshowText(showText==="black"?"red":"black");
      }}>show/hide</button>
      <h1 style={{color:showText}}>HI MY NAME IS PEDRO</h1>
    </div>
  );
}

export default Test31
