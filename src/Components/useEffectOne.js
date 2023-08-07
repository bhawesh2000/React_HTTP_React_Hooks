//useEffect hook let's us perform side-effectslike updating DOM, fetching data from api and setting subscription and times
//useEffect is used in functional Component like we use componentDidMount, ComponentDidUpdate and ComponentDidUnmount in class component
//We Did conditional run on useEffect


import React, { useEffect, useState } from 'react'

function UseEffectOne() {

    const [count , setCount]=useState(0)
    const [name , setName]=useState('')

//In useState 1st parameter is callback fn and 2nd parameter is array which include prop or state on whose basis useEffect execute
//this 2nd parameter is for conditional executing useEffect    
//if we pass 2nd parameter as empty array ([])then useEffect execute only once initially..(like in class comp. componentDidMount() is used)
    useEffect(()=>{  
        console.log(`updating document title`)
        document.title=`you clicked ${count} times`
    } ,
    [count])  //count is the state variable on whose change only useEffect hook execute

  return (
    <div>
      <input type='text' value={name} onChange={(event)=>{setName(event.target.value)}} />  
      <button onClick={()=>{ setCount(count+1)}}>CLicked {count} times</button>
    </div>
  )
}

export default UseEffectOne
