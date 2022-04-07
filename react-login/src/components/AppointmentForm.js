import React, {useState} from 'react';
import {Button, Form, Header, Input} from "semantic-ui-react";

function AppointmentForm({AddApp, error}){
    const[details, setDetails] = useState({date: "",startTime: "", endTime: "", patientId: "", employeeId: "", type: "", status: "", room: "", branchId: ""});
    const optionsS = [
        {key: 1, text: "NO SHOW", value: 1},
        {key: 2, text: "CANCELLED", value: 2},
        {key: 3, text: "COMPLETED", value: 3},
        {key: 4, text: "UNSCHEDULED", value: 4},
        {key: 5, text: "SCHEDULED", value: 5},

    ]
    const optionsT = [
        {key: 1, text: "CLEANING", value: 1},
        {key: 2, text: "FILLING", value: 2},
        {key: 3, text: "EXTRACTION", value: 3},

    ]
    const submitHandler = e => {
        e.preventDefault();
        AddApp(details);
        
    }

    return (
        <Form onSubmit={submitHandler}>
            <Header>Schedule An Appointment</Header>
            {(error != "") ? (<div className="error">{error}</div>) : ""}
        <Form.Group widths='equal'>
       <Form.Field
        id='date'
        control={Input}
        label="Date"
        placeholder='YYYY-MM-DD' 
        onChange={e => setDetails({...details, date: e.target.value})} value={details.date}
      />
      <Form.Field
        id='startTime'
        control={Input}
        label="Start Time"
        placeholder='HH:MM:SS' 
        onChange={e => setDetails({...details, startTime: e.target.value})} value={details.startTime}
      />
       <Form.Field
        id='endTime'
        control={Input}
        label="End Time"
        placeholder='HH:MM:SS'
        onChange={e => setDetails({...details, endTime: e.target.value})} value={details.endTime}
      />
      </Form.Group>
      <Form.Group widths='equal'>
      <Form.Field
        id='patientId'
        control={Input}
        label='Patient'
        placeholder='P_x'
        onChange={e => setDetails({...details, patientId: e.target.value})} value={details.patientId}
      />
      <Form.Field
        id='employeeId'
        control={Input}
        label='Employee'
        placeholder='E_x'
        onChange={e => setDetails({...details, employeeId: e.target.value})} value={details.employeeId}
      />
    </Form.Group>
    <Form.Group widths='equal'>
    <Form.Select options={optionsT}
        id='type'
        label='Type'
        placeholder='Appointment Type'
        onChange={e => setDetails({...details, type: e.target.value})} value={details.type}
      />
      <Form.Select options={optionsS}
        id='status'
        label='Status'
        placeholder='Appointment Status'
        onChange={e => setDetails({...details, status: e.target.value})} value={details.status}
      />
    <Form.Field
      id='room'
      control={Input}
      label='Room'
      placeholder='RX'
      onChange={e => setDetails({...details, room: e.target.value})} value={details.room}
    />
    <Form.Field
      id='branchId'
      control={Input}
      label='Branch'
      placeholder='B_1'
      onChange={e => setDetails({...details, branchId: e.target.value})} value={details.branchId}
    />
    </Form.Group>
      <Button type='submit'>Add</Button>
        </Form>

    )    

}

export default AppointmentForm;