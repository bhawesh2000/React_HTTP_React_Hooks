//to fetch posts that is inside json api using axios.get


import React, { Component } from 'react'
import axios from 'axios'

export class PostLists extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         errormsg:''
      }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts") //endpoints are passsed as parameter 
        .then((response)=>{
            console.log(response) //this will return an object which have data property that consits off all the posts
            this.setState({
                posts:response.data
            })
        }) 
        .catch((error)=>{
            console.log(error)
            this.setState({
                errormsg: "Error"
            })
        })
    }
    
  render() {

    const {posts , errormsg}=this.state

    return (
      <div>
        list of posts
        {
            posts.length ? posts.map((post)=><div key={post.title}>{post.title}</div>) : null
        }
        {
            errormsg ? <div>{errormsg}</div> : null
        }
      </div>
    )
  }
}

export default PostLists
