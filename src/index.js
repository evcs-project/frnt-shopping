import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route} from 'react-router-dom'

function Home(){
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}
function Topics(){
  return (
    <div>
      <h2>Topics</h2>
      Home...
    </div>
  )
}


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

