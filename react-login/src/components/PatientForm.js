import React, {useState} from 'react';
import {Button, Form, Header, Image} from "semantic-ui-react";

function PatientForm({Login, error}){
    const[details, setDetails] = useState({username: "", password: "", role: ""});
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
        
    }

    return (
        <Form onSubmit={submitHandler}>
            <Header>Add A Patient</Header>
            {(error != "") ? (<div className="error">{error}</div>) : ""}
            <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        placeholder='First name'
      />
      <Form.Field
        id='form-input-control-middle-name'
        control={Input}
        label='Middle name'
        placeholder='Middle name'
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
      />
    </Form.Group>
    <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='joe@schmoe.com'
      error={{
        content: 'Please enter a valid email address',
        pointing: 'below',
      }}
    />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Confirm'
    />
      <Button type='submit'>Add</Button>
        </Form>

    )    

}

export default PatientForm;