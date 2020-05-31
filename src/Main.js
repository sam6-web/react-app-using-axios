import React, { Component } from 'react'
import axios from "axios"
 class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            post :[]
            
        }
    }
    /* get request */
    componentDidMount () {
    axios.get("http://localhost:3000/posts")
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
                <h1>get from posts</h1>
                {post.map((post)=>{
                return(
                    <div key={post.id}>
                        <li> {post.id} </li>
                        <li> {post.title} </li>                        
                    </div>
                )})}
                
                
            </div>
        )
    }
}

export default Main