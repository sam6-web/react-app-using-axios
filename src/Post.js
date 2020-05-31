import React, { Component } from 'react'
import axios from 'axios'

 class Post extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
           title:"",
           id : ''
           
         }
     }
    handleChange = (e) => {
        this.setState({
            title : e.target.value
        })
    }
    handlePost = (e) => {
    
    e.preventDefault()
    console.log(this.state)
    /* post request */
    axios.post("http://localhost:3000/posts", this.state)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    window.location.reload(false)
    
    }
    handleChangeId = (e) => {
        this.setState({
            id : e.target.value
        })
    }
    /* delete request */
    handelRemove = () =>{
    axios.delete(`http://localhost:3000/posts/${this.state.id}`)
        .then(res=>console.log(res.data))
            
    window.location.reload(false)
    }
    /* update request */
    handleUpdate = () =>{
    
        const title = this.state.title   
        axios.put(`http://localhost:3000/posts/${this.state.id}`,{title})
            .then(res=>console.log(res)) 
    window.location.reload(false)
       
    }

    render() {
        const{title,id} = this.state
        return (
            <div>
                <h1>Post to posts</h1>
                <form >
                    <div>
                        <input name="title" placeholder ="title" value={title}  onChange = {this.handleChange}></input>
                    </div>                    
                </form>
                <button onClick={this.handlePost}>Post to users</button>
                <h1>delete from posts</h1>
                <form >
                    <div>
                        <input name="id" placeholder ="id" value={id}  onChange = {this.handleChangeId}></input>
                    </div>                    
                </form>
                <button onClick={this.handelRemove}>delete</button>
                <h1>Update</h1>
                <input name="id" placeholder ="id" value={id}  onChange = {this.handleChangeId}></input>
                <input name="title" placeholder ="title" value={title}  onChange = {this.handleChange}></input>
                <button onClick={this.handleUpdate}>up date</button>

            </div>
        )
    }
}   

export default Post