import React, { useEffect, useState } from 'react'
import axios from 'axios'
function DataFetching() {

    const [post , setPost] = useState({})
    const [id , setId]=useState(1)
    const [idFromButtonClick , setIdOnButtonClick] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then((res)=>{
            console.log(res)
            setPost(res.data)
        })
    } , [idFromButtonClick])

    const handleClick=()=>{
        setIdOnButtonClick(id)
    }

    

  return (
    <div>
      <input type='text' onChange={(event)=>setId(event.target.value)} />
      <button type='button' onClick={handleClick}>Fetch post</button>
      <div>{post.title}</div>
    </div>
  )
}

export default DataFetching
