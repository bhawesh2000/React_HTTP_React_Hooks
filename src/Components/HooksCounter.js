import React , {useState} from 'react'

function HooksCounter() {

    /* hook or function accepts argument which is initial value of state and returns current value of state 
    and return method for updating current value */

  const [count , setCount] = useState(0)  // destructuring array 
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Count {count}</button>
    </div>
  )
}

export default HooksCounter
