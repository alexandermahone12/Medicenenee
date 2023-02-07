import React from "react";
import "@fontsource/manrope";
import "./App.css";
/*import SearchBar from "./Components/SearchBar";
import BookData from "./Data.json";*/
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Goal from './pages/goal';
import Cortisone from './pages/cortisone';
import Metformin from './pages/metformin';
import Howto from './pages/howto';
import Ibuprofen from './pages/ibuprofen';
import Augmentin from './pages/augmentin';
import Trazodone from './pages/trazodone';
/*import SignUp from './pages/signup';*/
import Relaiability from './pages/relaiability';
import Panadol from './pages/panadol';
import Accutane from './pages/accutane';
import Aspirin from './pages/aspirin';
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
      <Route path='/cortisone' component={Cortisone} />
      <Route path='/metformin' component={Metformin} />
      <Route path='/ibuprofen' component={Ibuprofen} />
      <Route path='/augmentin' component={Augmentin} />
      <Route path='/trazodone' component={Trazodone} />
      <Route path='/accutane' component={Accutane} />
      <Route path='/aspirin' component={Aspirin} />
      </Switch>
    </Router>

      
    </div>
    

  );
}

export default App;
