import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
import {Link} from "react-router-dom";
import Welcome from './Welcome';



function App() {
  const AdminUser = {
    email: "admin@admin.ca",
    password: "admin"
  }

  
  var [loggedIn] = useState(false);
  const [user, setUser] = useState({username: "", email: ""})
  const [error, setError] = useState("")
  const Login = details => {
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

  }
  const Logout = () => {
    setUser({username: "", email: ""});
    loggedIn = false;
  }

  return (
    <div className="App">
     {(user.email != "") ? (
       <Welcome />
      ): (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;

