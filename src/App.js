import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import "./App.css"
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  return (


    <switch>
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
      </Router>
    </switch>
  )

}
export default App