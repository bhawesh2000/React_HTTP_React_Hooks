// useReducer with state object and action object 


import React, { useReducer } from 'react'

//defing initial state and reducer funcion 
//state as object and action as object
const initialState={
    firstCounter:0,
    secondCounter:10
}
const reducer=(Currentstate , action ) =>{
    switch(action.type){
        case 'increment': return {firstCounter: Currentstate.firstCounter + action.value} 
        case 'decrement' : return {firstCounter:Currentstate.firstCounter - action.value} 
        case 'reset': return initialState
        default : return Currentstate
    }
}

function CounterTwo() {

    const [count , dispatch]= useReducer(reducer , initialState)

  return (
    <div>
        <div>Count - {count.firstCounter}</div>
      <button onClick={()=> dispatch({type :'increment' , value:1})}>Increment</button>  {/* dispatch method execute code corresponding to particular action */}
      <button onClick={()=> dispatch({type :'decrement' , value:1})}>Decrement</button>
      <button onClick={()=> dispatch({type:'reset'})}>Reset</button>
      <button onClick={()=> dispatch({type :'increment' , value:5})}>Increment5</button>
      <button onClick={()=> dispatch({type :'decrement' , value:5})}>Decrement5</button>
      
    </div>
  )
}

export default CounterTwo
