import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import './App.css';
import About from "./Pages/About";
import NavBar from "./Pages/NavBar";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Footer from "./Pages/Footer";
import Certificates from "./Pages/Certificates";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Certificates/>
      <Footer/>
    </div>
  );
}

export default App;
