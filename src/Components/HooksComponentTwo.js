//reset,increment,decrement and update state based on previous state

import React, { useState } from 'react'

function HooksComponentTwo() {

    const initialCount = 0
    const [count , setCount] = useState(initialCount)

    const incrementFive= ()=>{
        for(let i=0; i<5; i++){
            setCount((prevCount)=>prevCount + 1) // we are fn to setCount which has access to previous state
        }
    }

  return (
    <div>
        Count : {count}
      <button onClick={()=>setCount(initialCount)}>Reset Count</button>
      <button onClick={()=> setCount((prevCount)=>prevCount + 1)}>Increment Count</button>
      <button onClick={()=>setCount((prevCount)=>prevCount - 1)}>Decrement Count</button>
      <button onClick={incrementFive}>Increment By 5</button>
    </div>
  )
}

export default HooksComponentTwo
