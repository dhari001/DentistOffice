import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import axios from "axios"
//import { useLocation } from 'react-router'

import PatientProfile from '../components/PatientProfile'
import UpcomingAppt from '../components/UpcomingAppt'
import MedHistory from '../components/MedHistory'


//----------- PATIENT VIEW -----------//
export default class PatientLookUp extends Component {
    state = {
        loggedInUser: {}
    }

    componentDidMount() {
        axios.get('http://localhost:8080/patient/findByID', { params: {id: 'P_6'} })
            .then(res => {
                this.setState({loggedInUser: res.data})
            })
    }

    render() {
        return (
            <div className="Patient">
                <Tab panes={
                    [
                        { menuItem: 'Profile', render: () => <Tab.Pane><PatientProfile profile={this.state.loggedInUser}/></Tab.Pane> },
                        { menuItem: 'Upcoming Appointments', render: () => <Tab.Pane><UpcomingAppt profile={this.state.loggedInUser}/></Tab.Pane> },
                        { menuItem: 'Medical History', render: () => <Tab.Pane><MedHistory profile={this.state.loggedInUser}/></Tab.Pane> }
                    ]
                }/>
            </div>
        )
    }
    
}