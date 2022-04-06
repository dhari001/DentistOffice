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
        loggedInUsername: '',
        loggedInUserId: ''
    }

    componentDidMount() {

        axios.get('http://localhost:8080/profile/findByUsername', {username: this.props.username})
            .then(res => {
                const user = res.data;
                this.setState({
                    loggedInUsername: user.username,
                    loggedInUserId: user.id
                });
                console.log(this.state.user)
            })
    }

    render() {
        return (
            <div className="Patient">
                <Tab panes={
                    [
                        { menuItem: 'Profile', render: () => <Tab.Pane><PatientProfile username='chocoman'/></Tab.Pane> },
                        { menuItem: 'Appointments', render: () => <Tab.Pane><UpcomingAppt id='P_2'/></Tab.Pane> },
                        { menuItem: 'Medical History', render: () => <Tab.Pane><MedHistory id='P_2'/></Tab.Pane> }
                    ]
                }/>
            </div>
        )
    }
    
}