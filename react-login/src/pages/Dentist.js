import React, { useEffect, useState } from "react";
import {Segment, Table} from 'semantic-ui-react'
import axios from "axios";
import Schedule from "../components/Schedule";
import {Route, Routes} from "react-router-dom";

function Dentist()  {


    return (
        <Segment>
            <Routes>
                <Route path='/'element ={<Schedule/>}/>
                <Route path ='/patientHistory'></Route>
            </Routes>
        </Segment>

    );

}

      
export default Dentist;
