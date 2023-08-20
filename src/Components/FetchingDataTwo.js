//fetching data using useReducer and useEffect

import React, { useEffect , useReducer } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post:{}
}

const reducer =(state , action)=>{
    switch(action.type){
        case 'FETCH_Success': return {
            loading: false,
            error:'',
            post:action.payload
            
        }

        case 'FETCH_Failed' : return {
            loading:false,
            error:'Something went wrong',
            post:[]
        }
        default: return initialState
    }
}



function FetchingDataTwo() {

    const [state , dispatch] = useReducer(reducer , initialState)

    useEffect(()=>{
        axios.
        get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{ console.log(response)
            dispatch({type:'FETCH_Success' , payload:response.data})
        })

        .catch((error)=>{
            dispatch({type:'FETCH_Failed'})
        })
    } , [])

  return (
    <div>
      {state.loading ? 'Loading..' : state.post.title}
      {state.error ? state.error : null}
    </div>
  )
}

export default FetchingDataTwo
