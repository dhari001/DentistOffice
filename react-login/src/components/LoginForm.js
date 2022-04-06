import React, {useState} from 'react';
import {Button, Form, Header} from "semantic-ui-react";

const options = [
    {key: 'e', text: 'Employee', value: 'EMPLOYEE'},
    {key: 'p', text: 'Patient', value: 'PATIENT'},
    {key: 'r', text: 'Responsible Party', value: 'RESPONSIBLE_PARTY'}
]

function LoginForm({Login, error}){
    const[details, setDetails] = useState({username: "", password: "", role: ""});
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
        
    }

    return (
        <Form onSubmit={submitHandler}>
            <Header>Login</Header>
            {(error != "") ? (<div className="error">{error}</div>) : ""}
            <Form.Field>
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    onChange={e => setDetails({...details, username: e.target.value})} value={details.username}>
                </input>
            </Form.Field>
            <Form.Select
                fluid
                label='Role'
                id='role'
                options={options}
                placeholder='Role'
                onChange={(e, data) => setDetails({...details, role: data.value})}
                value={details.role}
            />


            <Form.Field>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={e => setDetails({...details, password: e.target.value})} value={details.password}>
                </input>
            </Form.Field>
            <Button type='submit'>Login</Button>
        </Form>

    )    

}

export default LoginForm;
