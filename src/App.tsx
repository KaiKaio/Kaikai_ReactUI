import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import LikeButton from './components/LikeButton'
import MouseTracker from './components/MouseTracker'

const App: React.FC = () => {
  const [ show, setShow ] = React.useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello message={ 'Hello World~ '} />
        <LikeButton />
        <button onClick={ () => setShow(!show) }>Toggle Tracker</button>
        { show && <MouseTracker /> }
      </header>
    </div>
  );
}

export default App;
