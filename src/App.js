import React from 'react';
import './App.css';
import Main from "./Main"
import Post from './Post';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Main />  
      <Post/>
      </header>
      
    </div>
  );
}

export default App;