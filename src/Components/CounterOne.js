//implementing useReducer hook

import React, { useReducer } from 'react'

//defing initial state and reducer funcion 
const initialState=0
const reducer=(Currentstate , action ) =>{
    switch(action){
        case 'increment': return Currentstate + 1
        case 'decrement' : return Currentstate - 1
        case 'reset': return initialState
        default : return Currentstate
    }
}

function CounterOne() {

    const [count , dispatch]= useReducer(reducer , initialState)
  return (
    <div>
        Count - {count}
      <button onClick={()=> dispatch('increment')}>Increment</button>  {/* dispatch method execute code corresponding to particular action */}
      <button onClick={()=> dispatch('decrement')}>Decrement</button>
      <button onClick={()=> dispatch('reset')}>Reset</button>
    </div>
  )
}

export default CounterOne
