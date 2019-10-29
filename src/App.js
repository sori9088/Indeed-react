import React from "react";
import logo from './logo.svg';
import Routes from './components/Routes'
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NaviBar from "./components/NaviBar";

function App() {


  return (
    <>
    <Router>
    <NaviBar />
     <Routes />
    </Router>
  </>
  );
}

export default App;
