// create form to Post data in server

import React, { Component } from 'react'
import axios from 'axios'

class FormPost extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         userID:'',
         title:'',
         body:''
      }
    }

    changeHandler = (event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    submitHandler = (event)=>{
        event.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts' , this.state)
        .then((response)=>{
          console.log(response)
        })
        .catch((error)=>{
          console.log(error)
        })
        
    }
    
  render() {

    const {userID , title , body} = this.state

    return (
      <form onSubmit={this.submitHandler}>
        <div>
            <input type='text' name='userID' value={userID} onChange={this.changeHandler} />
        </div>
        <div>
            <input type='text' name='title' value={title} onChange={this.changeHandler} />
        </div>
        <div>
            <input type='text' name='body' value={body} onChange={this.changeHandler} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default FormPost
