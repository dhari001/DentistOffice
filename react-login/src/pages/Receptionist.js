import axios from 'axios';
import React, {useState} from 'react';
import AppointmentForm from '../components/AppointmentForm';
import {Segment} from "semantic-ui-react";
import Schedule from '../components/Schedule';
import PatientForm from '../components/PatientForm';

function Receptionist() {

     //SCHEDULE

    //PATIENT
    const [err, setErr] = useState("")
    const [successP, setSuccessP] = useState(false);

    const AddPatient  = async details => {
        /*var e = details.email
        var pId = details.pId
        var uN = details.username
        var pwd = details.password
        var fN = details.firstName
        var mN = details.middleName
        var lN = details.lastname
        var aId = details.id
        var bNum = details.buildingNumber
        var st = details.street
        var c = details.city
        var prov = details.province
        var zip = details.postalCode
        var dob = details.dob*/
        /*let res = await axios.post('http://localhost:8080/patient/create', {email: "ron@wes.com", id: "P_7", profile: {id: "P_7", username: "ron", password: "ron", firstName: "Ron", middleName: "Weasle", lastname: "Weasley", address: {id: "A_5", buildingNumber: 120, street: "Burrough", city: "London", province: "NT", postalCode: "A1B 2C3"}, dob: "2001-11-20"}})
        .then(res => {
            console.log(res)
            if(res.status == 200){
                setSuccessP(true)
                console.log(res.status)
            } else{
                setSuccessP(false)
                console.log(res.status)
                setErr("DID NOT WORK")
            }
        }).catch(function(e) {
            console.log(e)
            console.log(res)
        })*/

        let res = await axios.post('http://localhost:8080/profile/create', {id: "P_8", username: "tom", password: "tom", firstName: "Dark", middleName: "Voldy", lastname: "Lord", address: {id: "A_10", buildingNumber: 100, street: "gwen", city: "stacy", province: "ON", postalCode: "U8Y 9N5"}, dob: "2022-01-03"})
        .then(res => {
            console.log(res)
            if(res.status == 200){
                setSuccessP(true)
                console.log(res.status)
            } else{
                setSuccessP(false)
                console.log(res.status)
                setErr("DID NOT WORK")
            }
        }).catch(function(e) {
            console.log(e)
            console.log(res)
        })
        
        /*axios.post('http://localhost:8080/address/create', {id: "A_11", buildingNumber: 9, street: "Kings Cross", city: "London", province: "AB", postalCode: "H9P 3J4"})
        .then(res => {
            console.log(res)
            if(res.status == 200){
                setSuccessP(true)
                console.log(res.status)
            } else{
                setSuccessP(false)
                console.log(res.status)
                setErr("DID NOT WORK")
            }
        }).catch(function(e) {
            console.log(e)
        })*/


    }
   
    //APPOINTMENT
    const [error, setError] = useState("")
    const [successA, setSuccessA] = useState(false);

    const AddApp = details =>{

        var sT = details.startTime;
        var eT = details.endTime;
        var t = parseInt(details.type);
        var s = parseInt(details.status);
        var r = details.room;
        var b = details.branchId;
        var pat = details.patientId;
        var emp = details.employeeId;
        console.log(t)

        axios.post("http://localhost:8080/appointment/create", {id: 4, startTime: sT, endTime: eT, type: t, status: s, room: r, branchId: b, employeeId: emp, patientId: pat})
        .then(res => {
            console.log(res)
            if(res.status == 200){
                setSuccessA(true)
                console.log(res.status)
            } else{
                setSuccessA(false)
                console.log(res.status)
                setError("DID NOT WORK")
            }
        }).catch(function(e) {
            console.log("ERROR")
            console.log(e)
            console.log("the type is: " +t)
            console.log("the status is: " +s)
        })


    }
    return (

        <div className="Receptionist">
            {(successA) ? (
                <div className="Stay">
                    <AppointmentForm/>
                </div>
            ): (
                <Segment raised>
                    <AppointmentForm AddApp={AddApp} error={error}/>
                </Segment>
            )}
             
            <br></br>
            {(successP) ? (
                <div className="Stay">
                    <PatientForm/>
                </div>
            ): (
                <Segment raised>
                    <PatientForm AddPatient={AddPatient} err={error}/>
                </Segment>
            )} 
            <br></br>
            <div><Segment raised>
            <Schedule/>
                </Segment></div>        
        </div>
        
    );
}


export default Receptionist;
