import axios from 'axios';
import React, {useState} from 'react';
import AppointmentForm from '../components/AppointmentForm';
import {Segment} from "semantic-ui-react";
import Schedule from '../components/Schedule';
import PatientForm from '../components/PatientForm';

function Receptionist() {

    //PATIENT
   const [err, setErr] = useState("")
    const [successP, setSuccessP] = useState(false);

    const AddPatient  = details => {
        var e = details.email
        var pId = details.pId
        var uN = details.username
        var pwd = details.password
        var fN = details.firstName
        var mN = details.middleName
        var lN = details.lastName
        var aId = details.id
        var bNum = parseInt(details.buildingNumber)
        var st = details.street
        var c = details.city
        var prov = details.province
        var zip = details.postalCode
        var db = details.dob
        let res = axios.post('http://localhost:8080/patient/create', {email: e, id: "", profile: {id: "", username: uN, password: pwd, firstName: fN, middleName: mN, lastName: lN, address: {id: "", buildingNumber: bNum, street: st, city: c, province: prov, postalCode: zip}, dob: db}})
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
            console.log(res.status)
            console.log(prov)
            console.log(bNum)
            console.log(uN, pwd)
            console.log(fN + mN + lN)
            console.log(zip)
            console.log(db)
        })


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
        var d = details.date;
        console.log(t)
        //take date
        //take time
        //add a t in the middle and format that way
        axios.post("http://localhost:8080/appointment/create", {id: 4, startTime: d+"T"+sT, endTime: d+"T"+eT, type: t, status: s, room: r, branchId: b, employeeId: emp, patientId: pat})
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
            {(successP) ? (
                <div className="Stay">
                    <PatientForm/>
                </div>
            ): (
                <Segment raised>
                    <PatientForm AddPatient={AddPatient} err={err}/>
                </Segment>
            )} 
             
            <br></br>
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
            <div><Segment raised>
            <Schedule/>
                </Segment></div>        
        </div>
        
    );
}


export default Receptionist;
