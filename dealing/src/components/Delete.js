import React, { Component } from 'react'
import axios from 'axios'

export class Delete extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id: '',
        }
    }
    handleChange = event => {
        this.setState({ id: event.target.value });
      }
      handleClick = event => {
        event.preventDefault();
    
        axios.delete('https://jsonplaceholder.typicode.com/users/')
        .then(res => {
            console.log(res);
            console.log(res.data);
          })
        .catch(error => console.log(error))
      }
    
    render() {
        return (
            <div>
                <h1>Delete</h1>                
                <form >
                    <div>
                        <input name="id" placeholder ="Id"   onChange = {this.handleChange}></input>
                    </div>                    
                </form>
                <button onClick={this.handleClick}>Delete</button>           
            </div>
        )
    }
}

export default Delete
