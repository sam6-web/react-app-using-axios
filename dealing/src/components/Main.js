import React, { Component } from 'react'
import axios from "axios"
 class Main extends Component {
     constructor(props) {
         super(props)
      
         this.state = {
             post :[]
              
         }
     }
     componentDidMount () {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                console.log(res)
                this.setState({
                    post : res.data 
                })
            })
            .catch(error  => {
                console.log(error)
            })
       
     }
     
    render() {
        const{post}=this.state
        return (
            <div>
                <h1>get from users</h1>
                {post.map(post=><div key={post.id}> {post.name} </div>)}
               
                
            </div>
        )
    }
}

export default Main
