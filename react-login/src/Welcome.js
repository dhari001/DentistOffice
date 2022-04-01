import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Receptionist from './components/Receptionist';
import Doctor from './components/Doctor';
import LoginForm from "./components/LoginForm";

function Welcome () {
    return(
      <div className="duh">
        <nav>
          <ul>
            <li ><a href="/doctor">Doctor</a></li>
            <li><a href="/receptionist">Receptionist</a></li>
          </ul>
        </nav>
        <BrowserRouter>
          <Routes>
            <Route path="/doctor" element={<Doctor />}>
            </Route>
            <Route path="/receptionist" element={<Receptionist />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  )
    
  

}

export default Welcome