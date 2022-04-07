import React, { Component } from 'react'
import { Tab, Form, Button } from 'semantic-ui-react'
import axios from "axios"
//import { useLocation } from 'react-router'

import PatientProfile from '../components/PatientProfile'
import MedHistory from '../components/MedHistory'
import Schedule from '../components/Schedule'


//----------- PATIENT VIEW -----------//
export default class DentistLookUp extends Component {
    state = {
        loggedInUser: {},
    }

    componentDidMount() {
        axios.get('http://localhost:8080/patient/findByID', { params: {id: 'P_6'} })
            .then(res => {
                this.setState({loggedInUser: res.data})
            })
    }

    render() {
        return (
            <><>
            </><div className="Patient">
                    <Tab panes={[
                        { menuItem: 'Profile', render: () => <Tab.Pane><PatientProfile profile={this.state.loggedInUser} /></Tab.Pane> },
                        { menuItem: 'Medical History', render: () => <Tab.Pane><MedHistory profile={this.state.loggedInUser} /></Tab.Pane> },
                        { menuItem: 'Schedule', render: () => <Tab.Pane><Schedule /></Tab.Pane> }
                    ]} />
                </div></>
        )
    }
    
}