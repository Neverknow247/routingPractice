import React from 'react';
import {Router} from '@reach/router';
import './App.css';
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Number path="/:number" />
        <Word path="/:word/:tColor/:bColor" />
      </Router>
    </div>
  );
}

export default App;
