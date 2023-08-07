
//cleanup code is used to remove subscription,connection,timer and evrnt handler when component is ummounted.

import React, { useEffect, useState } from 'react'

function HookMouse() {

    const [x , setX]=useState(0)
    const [y , setY]=useState(0)

    const logMousePointer=(event)=>{
        console.log('mouse event')
        setX(event.clientX)
        setY(event.clientY)
    }

    useEffect(()=>{
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePointer)

        return ()=>{   // we add cleanup code to remove the event listner when component is unmounted
            console.log('Component Unmounted Code')
            window.removeEventListener('mousemove' , logMousePointer)
        }

    } , [])

  return (
    <div>
       
        X-{x} , Y-{y}
    </div>
  )
}

export default HookMouse
