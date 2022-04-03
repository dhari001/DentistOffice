import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Header, Image, Grid} from 'semantic-ui-react'
import axios from 'axios'

const dentistPic = 'https://lipsondentalgroup.com/wp-content/uploads/staff-1-600x598-1.jpg'



const BranchDetails = () => {
    const {id} = useParams();

    const[branch, SetBranch] = useState({});
    const[profile, SetProfile] = useState({});
    const[address, SetAddress] = useState({});

    const fetchBranchDetails = async () => {
        try {
            const {data} = await axios.get(`http://localhost:8080/branch/findByID?id=${id}`);
            SetBranch(data);
            SetProfile(data.manager.profile)
            SetAddress(data.address)
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(()=>{
        fetchBranchDetails();
        //console.log(branch)
    }, []);

    return (
            <Grid>
                <Grid.Row>
                    <Header>{profile.lastName} Family Dental</Header>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <Image size="huge" src={dentistPic}/>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Header>This is branch with address {address.buildingNumber} {address.street}</Header>
                    </Grid.Column>
                </Grid.Row>
        </Grid>
    );
}

export default BranchDetails;