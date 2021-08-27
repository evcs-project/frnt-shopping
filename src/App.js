import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {

  return (
    <div className="App">
      <Route path="/" exact = {true}><Home /></Route>
      <Route path="/login" component = {Login} ></Route>
    </div>
  );
}

export default App;