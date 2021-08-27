import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import React, {Component} from 'react';

const search = (select,query) => {
  const requestOption = {
    method: 'GET',
    redirect: 'follow'
   };

    fetch(
      `http://52.79.149.9:8080/api/book/search?${select}=${query}&size=25&page=0`,
       requestOption
   )
    .then(response => {response.json() 
      console.log(response)
    })
}

class App extends Component {
  state = {
    data:[
      {id: 1, title : '생활코딩', author: 'kim'}
    ]
  }

  handleValueSet=(select, inputValue) =>{
    search(select, inputValue)
  }

  render(){
  return (
    <div className="App">
      <Route path="/" exact = {true}><Home onChange = {this.handleValueSet}/></Route>
      <Route path="/login" component = {Login} ></Route>
      <Route path="/Signup" component = {Signup} ></Route>
    </div>
  );
  }
}

export default App;