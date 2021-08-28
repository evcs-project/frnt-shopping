import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import React, {Component} from 'react';

class App extends Component {
  state = {
    data:[  
    ]
  }

  search = (select, query) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`http://13.125.22.103:8080/api/book/search?size=25&page=0&${select}=${query}`, requestOptions)
      .then(response => response.json())
      .then(result => result.content.map(item => ({title: item.bookNm})))
      .then(items => {this.setState({data:items}) 
      console.log(items)
    })
      .catch(error => console.log('error', error))
    };

  handleValueSet = (select, inputValue) => {
    this.search(select, inputValue)
  }
  
  render(){
    return (
      <div className="App">
        <Route path="/" exact = {true}><Home books = {this.state.data} onChange = {this.handleValueSet} /></Route>
        <Route path="/login" component = {Login} ></Route>
        <Route path="/Signup" component = {Signup} ></Route>
      </div>
  );
  }
}

export default App;