import React, {useState} from 'react';
import {Button, Form, Header, Input} from "semantic-ui-react";

function PatientForm({AddPatient, error}){
    const[details, setDetails] = useState({startTime: "", endTime: "", patientId: "", employeeId: "", type: "", status: "", room: "", branchId: ""});
    const options = [
        {key: 1, text: "AB", value: "AB"},
        {key: 2, text: "BC", value: "BC"},
        {key: 3, text: "MN", value: "MN"},
        {key: 4, text: "NB", value: "NB"},
        {key: 5, text: "NS", value: "NS"},
        {key: 6, text: "NL", value: "NL"},
        {key: 7, text: "NWT", value: "NWT"},
        {key: 8, text: "ON", value: "ON"},
        {key: 9, text: "PEI", value: "PEI"},
        {key: 10, text: "QB", value: "QB"},
        {key: 11, text: "SK", value: "SK"},
        {key: 12, text: "YT", value: "YT"},

    ]
    const submitHandler = e => {
        e.preventDefault();
        AddPatient(details);
        
    }

    return (
        <Form onSubmit={submitHandler}>
            <Header>Add A Patient</Header>
            {(error != "") ? (<div className="error">{error}</div>) : ""}
        <Form.Group widths='equal'>
       <Form.Field
        id='firstName'
        control={Input}
        label="First Name"
        placeholder="First Name" 
        onChange={e => setDetails({...details, firstName: e.target.value})} value={details.firstName}
      />
       <Form.Field
        id='middleName'
        control={Input}
        label="Middle Name"
        placeholder="Middle Name"
        onChange={e => setDetails({...details, middleName: e.target.value})} value={details.middleName}
      />
       <Form.Field
        id='lastName'
        control={Input}
        label="Last Name"
        placeholder="Last Name"
        onChange={e => setDetails({...details, lastName: e.target.value})} value={details.lastName}
      />
       <Form.Field
        id='dob'
        control={Input}
        label="Date Of Birth"
        placeholder="Date Of Birth" 
        onChange={e => setDetails({...details, dob: e.target.value})} value={details.dob}
      />
      <Form.Field
        id='pId'
        control={Input}
        label="Patient"
        placeholder="P_X" 
        onChange={e => setDetails({...details, pId: e.target.value})} value={details.pId}
      />
      </Form.Group>
      <Form.Group widths='equal'>
      <Form.Field
      id='email'
      control={Input}
      label='Email'
      placeholder='joe@schmoe.com'
      onChange={e => setDetails({...details, email: e.target.value})} value={details.email}
    />
      <Form.Field
        id='username'
        control={Input}
        label='Username'
        placeholder='username'
        onChange={e => setDetails({...details, username: e.target.value})} value={details.username}
      />
      <Form.Field
        id='password'
        control={Input}
        label='Password'
        placeholder='password'
        onChange={e => setDetails({...details, password: e.target.value})} value={details.password}
      />
    </Form.Group>
    <Form.Group widths='equal'>
    <Form.Field
        id='id'
        control={Input}
        label='Address ID'
        placeholder='A_X'
        onChange={e => setDetails({...details,id: e.target.value})} value={details.id}
      />
      <Form.Field
        id='street'
        control={Input}
        label='Street Name'
        placeholder='Street'
        onChange={e => setDetails({...details, password: e.target.value})} value={details.password}
      />
       <Form.Field
        id='buildingNumber'
        control={Input}
        label='Building Number'
        placeholder='1234'
        onChange={e => setDetails({...details, buildingNumber: e.target.value})} value={details.buildingNumber}
      />
      </Form.Group>
      <Form.Group widths='equal'>
      <Form.Field
        id='city'
        control={Input}
        label='City'
        placeholder='city'
        onChange={e => setDetails({...details, city: e.target.value})} value={details.city}
      />
      <Form.Select options={options}
        id='province'
        label='Province'
        placeholder='ON'
        onChange={e => setDetails({...details, province: e.target.value})} value={details.province}
      />
    <Form.Field
      id='postalCode'
      control={Input}
      label='Postal Code'
      placeholder='LNL NLN'
      onChange={e => setDetails({...details, postalCode: e.target.value})} value={details.postalCode}
    />
    </Form.Group>
      <Button type='submit'>Add</Button>
        </Form>

    )    

}

export default PatientForm;