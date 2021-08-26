import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div> Hello React Router Dom</div>
      <Route path = '/'/>
      <Route path = '/login'/>
    </div>
  );
}


export default App;
