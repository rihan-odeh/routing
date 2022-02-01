 import './App.css';
import React from "react";
import Numbers from './components/Numbers'
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import Coloredwords from './components/Coloredwords';
const Home = (props) => {
  return (
    <h1 style={{color: "red"}}>Welcome</h1>
  );
}

function App() {
     return (
      <BrowserRouter>
       <div className="App">
      
     
      
       <Route exact path="/home">
          <Home />
        </Route>
        {/* <Switch>
        <Route path="/:parameter">
          <Numbers />
        </Route>
      </Switch> */}
      <Switch>
        <Route path="/:word/:color/:background">
          <Coloredwords />
        </Route>
      </Switch>
      </div>
      </BrowserRouter>
     );
  }
  
   export default App;
