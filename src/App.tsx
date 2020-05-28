import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import LikeButton from './components/LikeButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello message={ 'Hello World~ '} />
        <LikeButton />
      </header>
    </div>
  );
}

export default App;
