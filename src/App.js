import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import BookData from "./Data.json";
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Goal from './pages/goal';
import Howto from './pages/howto';
import Ahen from './pages/ahen';
/*import SignUp from './pages/signup';*/
import Relaiability from './pages/relaiability';
import Panadol from './pages/panadol';
import './App.css';



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/howto' component={Howto} />
      <Route path='/goal' component={Goal} />
      <Route path='/relaiability' component={Relaiability} />
      <Route path='/panadol' component={Panadol} />
      <Route path='/ahen' component={Ahen} />
      </Switch>
    </Router>

      
    </div>
    

  );
}

export default App;
