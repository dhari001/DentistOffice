import React, {useState} from 'react';
import LoginForm from "../components/LoginForm";
import {Segment} from "semantic-ui-react";
import axios from 'axios';
import {ROLE} from './enum'

function Home() {
    /*const AdminUser = {
        username: "ADMINA",
        password: "admin"
    }*/

    var loggedIn;
    const [user, setUser] = useState({username: "", role: ""})
    const [error, setError] = useState("")
    

    const Login = details => {
       
        var un = details.username;
        var pwd = details.password;
        var r;
        if(details.role == 'Patient'){
            r = ROLE.PATIENT
        } else if(details.role == "Employee"){
            r = ROLE.EMPLOYEE
        }
        else if(details.role == "Responsible Party"){
            r = ROLE.RESPONSIBLE_PARTY
        }
        
        let res = axios.post('http://localhost:8080/profile/authenticate',{username: un, password: pwd,  role: r});
        if(res.data){
            console.log(res.data);
            setUser({
                username: details.username,
                role: details.role
            });
            loggedIn = true;
        } else{
            setError("Login Details Are Not Correct")
            loggedIn = false;
            console.log("Login Details Are Incorrect")
            console.log(res.data)
        }

    }

    /*const Login = details => {
        if(details.email == AdminUser.email && details.password == AdminUser.password){
            console.log("Login");
            setUser({
                username: details.username,
                email: details.email
            });
            loggedIn = true;
            console.log(loggedIn);
        } else{
            setError("Login Details Are Not Correct")
        }

    }*/
    const Logout = () => {
        setUser({username: "", role: ""});
        console.log("IS LOGGING OUT")
        loggedIn = false;
    }


    return (
        <div className="Home">
            {(user.username != "") ? (
                <><div className="Welcome">
                    <h2>Welcome <span>{user.username}</span></h2> <button onClick={Logout}>Logout</button> </div>
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