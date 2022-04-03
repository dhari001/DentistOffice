import React, {useState} from 'react';
import {Button, Form, Header} from "semantic-ui-react";

function LoginForm({Login, error}){
    const[details, setDetails] = useState({username: "", email: "", password: ""});
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
            <Form.Field>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={e => setDetails({...details, email: e.target.value})} value={details.email}>
                </input>
            </Form.Field>
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
