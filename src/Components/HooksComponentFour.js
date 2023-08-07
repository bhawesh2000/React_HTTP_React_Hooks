//useState with array

import React, { useState } from 'react'

function HooksComponentFour() {

    const [items , setItems] = useState([])

    const addItems =()=>{
        setItems([...items , {  // spread operator is used to append list...first we spread list then we push new object
            id:items.length,
            value:Math.floor(Math.random() *10) + 1
        }]) // to append list we use spread operator
    }

  return (
    <div>
        <button onClick={addItems}>Add Item</button>
      <ul>
        {
            items.map((item)=>{ return (<li key={item.id}>{item.value}</li>)})
        }
      </ul>
    </div>
  )
}

export default HooksComponentFour
