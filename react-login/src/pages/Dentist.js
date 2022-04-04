import React, { useEffect, useState } from "react";
import {Segment, Table} from 'semantic-ui-react'
import axios from "axios";
import Schedule from "../components/Schedule";
import {Route, Routes} from "react-router-dom";

<<<<<<< Updated upstream
export default class Dentist extends Component {
    state = {
        persons: []
    }

    componentDidMount() {

        axios.get('http://localhost:8080/profile/findAll')
            .then(res => {
                const persons = res.data;
                this.setState({persons});
                console.log(this.state.persons)
            })
    }

    render() {
        return (
            <div className="Receptionist">
                <ul>
                    {
                        this.state.persons
                        .map(person => <li key = {person.id}>{person.firstName}</li>)
                    }
                </ul>
            </div>
        );
    }

}
=======
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
>>>>>>> Stashed changes
