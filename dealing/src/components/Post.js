import React, { Component } from 'react'
import axios from 'axios'

 class Post extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
           title:"",
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
          
         axios.post("https://jsonplaceholder.typicode.com/users", this.state)
                .then(res => console.log(res))
                .catch(error => console.log(error))
     }


     
    render() {
        const{title} = this.state
        return (
            <div>
                <h1>Post to users</h1>
                <form >
                    <div>
                        <input name="title" placeholder ="title" value={title}  onChange = {this.handleChange}></input>
                    </div>                    
                </form>
                <button onClick={this.handlePost}>Post to users</button>
            </div>
        )
    }
}

export default Post
