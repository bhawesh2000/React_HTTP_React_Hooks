// useCounter is custom hook and custom hook isjs function whose name starts with use keyword

import  { useState } from 'react'

function useCounter(initialCount , value) {  //value is the argument with which we increment or decrement count
    const [count , setCount] = useState(initialCount)

    const increment = ()=>{
        setCount((prevCount)=> prevCount + value)
    }

    const decrement = ()=>{
        setCount((prevCount)=> prevCount - value)
    }

    const reset = ()=>{
        setCount(initialCount)
    }

  return (
   [count , increment , decrement , reset]  // component CounterOne and CounterTwo will access these value and method
  )
}

export default useCounter
