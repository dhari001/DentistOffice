import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
import {Link} from "react-router-dom";
import Main from "./components/Main";
import NavBar from "./components/NavBar";


function App() {

  return (
    <div className="App">
        <NavBar/>
        <Main/>
    </div>
  );
}

export default App;
