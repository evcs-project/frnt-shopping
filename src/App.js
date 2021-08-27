import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import {useState} from 'react';
const search= (query) => {
  const requestOption = {
    method: 'GET',
    redirect: 'follow'
   };

    fetch(
      `http://52.79.149.9:8080/api/book/search?bookNm=${query}`,
       requestOption
   ).then(response => {response.json()
  console.log(response)})
}

function App({book}) {
  const [books, setBooks] = useState([]);
  
  search('study')

  return (
    <div className="App">
      <Route path="/" exact = {true}><Home /></Route>
      <Route path="/login" component = {Login} ></Route>
      <Route path="/Signup" component = {Signup} ></Route>
    </div>
  );
}

export default App;