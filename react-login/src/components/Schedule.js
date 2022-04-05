import React, { useEffect, useState } from "react";
import {Card, Table} from 'semantic-ui-react'
import axios from "axios";

const Schedule = () => {

    const [appt, setappt] = useState([]);

    const getSchedule = () => {
        axios.get('http://localhost:8080/appointment/findAll').then(res => {
            setappt(res.data)
            console.log(res.data)
        }).catch(function (e){
            console.log(e)
        });
    }

    useEffect(() => {
        getSchedule();
    }, []);

    var status;

    function convertS(x){
        if(x == 1){
            status = "NO SHOW"
        } else if(x==2) {
            status = "CANCELLED"

        } else if(x==3) {
            status = "COMPLETED"

        } else if(x==4) {
            status = "UNSCHEDULED"

        } else if(x==5) {
            status = "SCHEDULED"

        } 
    }


    return (

        
            <><h1>Appointment Schedule</h1>
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
                         <Table.Cell>{ap.status}</Table.Cell>
                     </Table.Row>

                 ))}
             </Table.Body>
            </Table>
        </>
            
    );

}

      
export default Schedule;