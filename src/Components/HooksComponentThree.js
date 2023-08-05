// usestate with objects

// spread operator(..args) is used to merge different properties which was not need in setState method in class component
import React, { useState } from 'react'

function HooksComponentThree() {

    const[name , setName] = useState({firstName:'' , lastName:''})

  return (
    <div>
      <input type='text' value={name.firstName} 
        onChange={(event)=> setName({...name , firstName:event.target.value})} //spread operator is used to merge two properties
      /> 
      <input type='text' value={name.lastName} 
        onChange={(event)=> setName({...name , lastName:event.target.value})}
      /> 

      <h1>your First Name is - {name.firstName}</h1>
      <h1>your Last Name is - {name.lastName}</h1>

      <h2>{JSON.stringify(name)}</h2> {/* I displayed name state variable just for checking */}

    </div>
  )
}

export default HooksComponentThree
