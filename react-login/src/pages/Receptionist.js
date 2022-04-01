import React from 'react'
import {Button, Input, Form} from "semantic-ui-react";

function Receptionist() {

    console.log("hello");
    return (
        <div>
        <h2>Add A Patient</h2>
        <Form>
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
  </Form>

        </div>
        
    );
}

export default Receptionist;