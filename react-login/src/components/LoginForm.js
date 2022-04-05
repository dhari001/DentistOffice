import React, {useState} from 'react';
import {Button, Form, Header, Image} from "semantic-ui-react";

function LoginForm({Login, error}){
    const[details, setDetails] = useState({username: "", password: "", role: ""});
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
        
    }

    const options = [
        {key: "EMPLOYEE", text: "Employee", value: "EMPLOYEE"},
        {key: "PATIENT", text: "Patient", value: "PATIENT"},
        {key: "RESPONSIBLE_PARTY", text: "Responsible Party", value: "RESPONSIBLE_PARTY"},

    ]

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
            <Form.Select options={options}
                id='role'
                label='Role'
                placeholder='ROLE'
                onChange={e => setDetails({...details, role: e.target.value})} value={details.role}
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