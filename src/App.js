import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'


function App() {
  return (
    <div className="App">
      <Route path="/" component = {Home} exact = {true}></Route>
      <Route path="/login" component = {Login} ></Route>
      <Route path="/Signup" component = {Signup} ></Route>
    </div>
  );
}

export default App;