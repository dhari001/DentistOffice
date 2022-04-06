import React, { useEffect, useState } from "react";
import {Table, Form, Button} from 'semantic-ui-react'
import axios from "axios";
import SearchForm from './SearchForm'

const Schedule = () => {

    var set;
    const [appt, setappt] = useState([]);
    //const [search, setSearch] = useState("")
    const Search = details => {
        //set = details.empId
        console.log(details.empId)

    }
   
   //var set;
   /*const submitHandler = e => {
        e.preventDefault();
        Search(search);
        //setDetails(details.empId)
        //console.log(details.empId)
        //set = details.empId
        //return set
        
    }*/
    //console.log(details.empId)
    //console.log(set)


    //var set = details.empId
    //console.log(set)
    //const [details, setDetails] = useState({empId:""})
    const getSchedule = ()=> {
        //var id = submitHandler
        
        axios.get('http://localhost:8080/appointment/findByEmployeeId?id='+"P_2").then(res => {
            setappt(res.data)
            console.log(res.data)
            //console.log(set)
            //console.log(search)
        }).catch(function (e){
            console.log(e)
            //console.log(search)
        });
    }

    useEffect(() => {
        getSchedule();
    }, []);


    return (
        <>
        <SearchForm Search={Search}/>

        <><><h1>Appointment Schedule</h1>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>Room</Table.HeaderCell>
                        <Table.HeaderCell>Branch</Table.HeaderCell>
                        <Table.HeaderCell>Doctor</Table.HeaderCell>
                        <Table.HeaderCell>Patient</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {appt.map((ap) => (
                        <Table.Row>
                            <Table.Cell>{ap.startTime}</Table.Cell>
                            <Table.Cell>{ap.room}</Table.Cell>
                            <Table.Cell>{ap.branchId}</Table.Cell>
                            <Table.Cell>{ap.employeeId}</Table.Cell>
                            <Table.Cell>{ap.patientId}</Table.Cell>
                        </Table.Row>

                    ))}
                </Table.Body>
            </Table>
        </></></>
            
    );

}

      
export default Schedule;