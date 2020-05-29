import React, { Component } from 'react'
import axios from 'axios'

 class Patch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
        }
    }
    handleChange = event => {
        this.setState({ name: event.target.value });
      }
      handleClick = event => {
        event.preventDefault();
    
        axios.patch('https://jsonplaceholder.typicode.com/users/')
        .then(res => {
            console.log(res);
            console.log(res.data);
            })
        .catch(error  => {
            console.log(error)
        })
      }
    
    render() {
        return (
            <div>
                <h1>Edit</h1>
                <form >
                    <div>
                        <input name="name" placeholder ="title"   onChange = {this.handleChange}></input>
                    </div>                    
                </form>
                <button onClick={this.handleClick}>Delete</button>           
            </div>
        )
    }
}

export default Patch
