import React, {useState} from 'react';
import {Button, Form, Header, Input} from "semantic-ui-react";

function AppointmentForm({AddApp, error}){
    const[details, setDetails] = useState({apptID: "", startT: "", sendT: "", patID: "", empID: "", type: "", status: "", room: "", branch: ""});
    const optionsS = [
        {key: 1, text: "NO SHOW", value: "NO SHOW"},
        {key: 2, text: "CANCELLED", value: "CANCELLED"},
        {key: 3, text: "COMPLETED", value: "COMPLETED"},
        {key: 4, text: "UNSCHEDULED", value: "UNSCHEDULED"},
        {key: 5, text: "SCHEDULED", value: "SCHEDULED"},

    ]
    const optionsT = [
        {key: 1, text: "CLEANING", value: "CLEANING"},
        {key: 2, text: "FILLING", value: "FILLING"},
        {key: 3, text: "EXTRACTION", value: "EXTRACTION"},

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
        id='apptID'
        control={Input}
        label='Appointment ID'
        placeholder='Appointment ID'
        onChange={e => setDetails({...details, apptID: e.target.value})} value={details.apptID}
      />
       <Form.Field
        id='startT'
        control={Input}
        label="Start Time"
        placeholder='YYYY-MM-DD, 00:00 a.m.' 
        onChange={e => setDetails({...details, startT: e.target.value})} value={details.startT}
      />
       <Form.Field
        id='endT'
        control={Input}
        label="End Time"
        placeholder='YYYY-MM-DD, 00:00 p.m.'
        onChange={e => setDetails({...details, endT: e.target.value})} value={details.endT}
      />
      </Form.Group>
      <Form.Group widths='equal'>
      <Form.Field
        id='patID'
        control={Input}
        label='Patient'
        placeholder='P_x'
        onChange={e => setDetails({...details, patID: e.target.value})} value={details.patID}
      />
      <Form.Field
        id='empID'
        control={Input}
        label='Employee'
        placeholder='E_x'
        onChange={e => setDetails({...details, empID: e.target.value})} value={details.empID}
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
      id='branch'
      control={Input}
      label='Branch'
      placeholder='B_1'
      onChange={e => setDetails({...details, branch: e.target.value})} value={details.branch}
    />
    </Form.Group>
      <Button type='submit'>Add</Button>
        </Form>

    )    

}

export default AppointmentForm;