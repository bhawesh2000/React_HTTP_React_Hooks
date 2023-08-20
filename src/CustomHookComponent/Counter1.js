import React from 'react'
import useCounter from './useCounter'

function Counter1() {

   const [count , increment , decrement , reset] = useCounter(0 , 1) // 0 is initial count value and 1 is value with which increment is done

  return (
    <div>
      <h2>Count - {count} </h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter1
