import React, {useState} from 'react';
import LoginForm from "../components/LoginForm";
import {Segment} from "semantic-ui-react";
import axios from 'axios';

function Home() {

    const [user, setUser] = useState({username: "", role: ""})
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false);
    

    const Login = details => {
        var bool;
        var un = details.username;
        var pwd = details.password;
        var r = details.role;
        console.log(un)
        console.log(pwd)
        console.log(r)
       axios.post('http://localhost:8080/profile/authenticate',{username: un, password: pwd,  role: r})
        .then(res => {
            if(res.data){
                setSuccess(true)
                console.log(res.data)
            } else{
                setSuccess(false)
                console.log(res.data)
                setError("LogIn Details Are Not Correct")
            }
        });
    }
    const Logout = () => {
        setUser({username: "", role: ""});
        setSuccess(false)
    }

    return (
        <div className="Home">
            {(success) ? (
                <><div className="Welcome">
                    <h2>Welcome <span>{user.username}</span></h2><button onClick={Logout}>Logout</button> </div>
                </>
            ): (
                <Segment raised>
                    <LoginForm Login={Login} error={error}/>
                </Segment>
            )}
        </div>
    );
}

export default Home;