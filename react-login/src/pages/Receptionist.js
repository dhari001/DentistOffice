import axios from 'axios';
import React, {useState} from 'react';
import AppointmentForm from '../components/AppointmentForm';
import {Segment} from "semantic-ui-react";

function Receptionist() {
   
    //SCHEDULE
    /*const getSchedule =() => {
        axios.get("http://localhost:8080/appointment/findAll")
        .then(res => {
            scheduleList = res.data
        })

    }*/
    /*axios.get("http://localhost:8080/appointment/findAll")
        .then(res => {
            scheduleList = res.data
            console.log(scheduleList)
        })*/


    //APPOINTMENT
    const [appt, setAppt] = useState({type: "", patID: ""})
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false);

    const AddApp = details =>{

        axios.post("http://localhost:8080/appointment/create", {id: 7, startTime: "2022-10-26, 10:00 a.m.", endTime: "2022-10-26, 11:00 a.m.", type: 1, status: 5, room: "R10", branchId: "B_1", employeeId: "P_2", patientId: "P_6"})
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
