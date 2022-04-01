import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Header, Button} from 'semantic-ui-react'
import axios from 'axios'


const BranchDetails = () => {
    const {id} = useParams();

    const[branch, SetBranch] = useState({});
    useEffect(() => {
        const fetch = async () => {
            try {
                const {data} = await axios.get(`http://localhost:8080/branch/findByID?id=${id}`);
                SetBranch(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetch();
    }, []);

    return (
        <>
            <Header>This is branch with address {branch.address_id}</Header>

        </>
    );
}

export default BranchDetails;