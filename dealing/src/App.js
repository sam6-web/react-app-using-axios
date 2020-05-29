import React from 'react';
import './App.css';
import Main from './components/Main'
import Post from './components/Post';
import Delete from './components/Delete'
import Patch from './components/Patch'
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Main />
      <Post />
      <Delete /> 
      <Patch />     
      </header>
      
    </div>
  );
}

export default App;
