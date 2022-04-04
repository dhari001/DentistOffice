import React, { useState } from 'react'
import axios from "axios"

const PatientProfile = (props) => {

    const [user, setUser] = useState({
        id: "",
        firstName: "",
        middleName: "",
        lastName: "",
        addressId: "",
        dob: ""
    })

    const componentDidMount = () => {

        axios.get('http://localhost:8080/profile/findByUsername', { params: { username: props.username } })
            .then(res => {
                const userInfo = res.data;
                console.log(userInfo);
                this.setUser({
                    id: userInfo.id,
                    furstName: userInfo.firstName,
                    middleName: userInfo.middleName,
                    lastName: userInfo.lastName,
                    addressId: userInfo.addressId,
                    dob: userInfo.dob
                });
                console.log(user)
            })
    }   

    function hasResParty(age) {
      if (age <= 15) {
        return (
          <>
          <UserInfoTable tableType="Responsible Party" user=""/>
          </>
        )
      }
    }
  

    return (
        <>
        {componentDidMount()}
        <UserInfoTable
        tableType="Profile"
        id={user.id}
        firstname={user.firstname}
        lastname={user.lastname}
        address={user.addressId}
        dob={user.dob}
        />
  
    {hasResParty(15)}
  
        </>
    )
};

const UserInfoTable = (props) => {

    return (
        <>
        <table>
            <thead>
                <th>{props.tableType}</th>
            </thead>
            <tbody>
                <tr>
                    <td>ID</td>
                    <td>{props.id}</td>
                </tr>
                <tr>
                    <td>First Name</td>
                    <td>{props.firstname}</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>{props.lastname}</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>{props.address}</td>
                </tr>
                <tr>
                    <td>Date of Birth</td>
                    <td>{props.dob}</td>
                </tr>
            </tbody>
        </table>
        </>
    )
    
}

const ModPatientProfile = (person) => {

    const [details, setDetails] = useState({firstname: "", lastname: "", phone: "", address: ""});

    return (
        <>
        <table>
            <thead>
                <th>Profile</th>
            </thead>
            <tbody>
                <tr>
                    <td>ID</td>
                    <td>{person.id}</td>
                </tr>
                <tr>
                    <td>First Name</td>
                    <td>
                        <input type="firstname" name="firstname" id="firstname" onChange={e => setDetails({...details, firstname: e.target.value})} value={details.firstname}></input>
                    </td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>
                        <input type="lastname" name="lastname" id="lastname" onChange={e => setDetails({...details, lastname: e.target.value})} value={details.lastname}></input>
                    </td>
                </tr>
                <tr>
                    <td>Date of Birth</td>
                    <td>{person.dob}</td>
                </tr>
                <tr>
                    <td>Phone Number</td>
                    <input type="phone" name="phone" id="phone" onChange={e => setDetails({...details, phone: e.target.value})} value={details.phone}></input>
                </tr>
                <tr>
                    <td>Address</td>
                    <input type="address" name="address" id="address" onChange={e => setDetails({...details, address: e.target.value})} value={details.address}></input>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default PatientProfile