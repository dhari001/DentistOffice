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
        axios.post('http://localhost:8080/profile/authenticate',{username: un, password: pwd,  role: r})
        .then (res => {
            console.log(res.data) 
            /*bool = res.data;
            console.log(bool)*/
        }).catch(function (e){
            setError("Login Details Are Not Correct")
            console.log("Login Details Are Incorrect")
            console.log(e)
            console.log("PRINT SUCCESS : " +success.toString())
        });
        if(bool){
            console.log("THE DATA IS CORRECT: " + bool)
            setUser({
                username: details.username,
                role: details.role
            });
            setSuccess(true)
            console.log("THE LOG IN WAS SUCCESSFUL: " +success.toString())
        } else{
            setSuccess(false)
            console.log("THE DATA IS CORRECT: " + bool)
            console.log("THE LOG IN WAS SUCCESSFUL: " +success.toString())
        }
        /*axios.post('http://localhost:8080/profile/authenticate',{username: un, password: pwd,  role: r})
            .then(res => {
                //console.log(res.data);
                    setUser({
                        username: details.username,
                        role: details.role
                    });
                    setSuccess(true)
                console.log("PRINT SUCCESS HA: "+success.toString())
                
            }).catch(function (e){
                setError("Login Details Are Not Correct")
                console.log("Login Details Are Incorrect")
                console.log("BLAH")
                //console.log(res.data) 
                setSuccess(false)
                console.log("BLAH")
                console.log("PRINT SUCCESS : " +success.toString())
            });*/
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