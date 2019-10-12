import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import Client from '../containers/client';

function App() {
  return (
    <div className="App">
      <Route path={"/"} component={Client} />
    </div>
  );
}

export default App;
