import axios from 'axios';
import React, {useState} from 'react';
import AppointmentForm from '../components/AppointmentForm';
import {Segment} from "semantic-ui-react";

function Receptionist() {




    //APPOINTMENT
    const [appt, setAppt] = useState({type: "", patID: ""})
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false);

    const AddApp = details =>{

        axios.post('http://localhost:8080/appointment/create', {id: 2, startTime: "2022-04-02T22:26:53.044Z", endTime: "2022-04-02T22:26:53.044Z", type: 1, status: 5, room: "R10", branchId: "B_1", employeeId: "P_2", patientId: "P_6"})
        .then(res => {
            console.log(res)
            /*if(res.AxiosResponse == 200){
                setSuccess(true)
                console.log(res.AxiosResponse)
            } else{
                setSuccess(false)
                console.log(res.AxiosResponse)
                setError("DID NOT WORK")
            }*/
        }).catch(function(e) {
            console.log("ERROR")
            console.log(e)
        })


    }
    return (

        <div className="Receptionist">
            {(success) ? (
                <div className="Stay">
                    <h1>Form Submitted</h1>
                </div>
            ): (
                <Segment raised>
                    <AppointmentForm AddApp={AddApp} error={error}/>
                </Segment>
            )}            
        </div>
    );
}

export default Receptionist;
