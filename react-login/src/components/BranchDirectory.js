import React, {useEffect, useState} from 'react'
import {Card, Header} from 'semantic-ui-react'
import axios from 'axios'
import {Link} from 'react-router-dom';


const BranchDirectory = () => {
    const [branches, setBranches] = useState([]);

    useEffect(()=>{
        const fetch = async () => {
            try {
                const {data} = await axios.get("http://localhost:8080/branch/findAll");
                setBranches(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetch();
    }, []);


    return (
        <>
            <Header size ='huge'>Branch Directory</Header>
            <Card.Group>
                {branches.map((branch) => (
                    <Card href={`/branch/${branch.id}`}>
                        <Card.Content>
                            <Card.Header>Branch {branch.address_id}</Card.Header>
                            <Card.Description> This is a branch {branch.id} it is managed by {branch.manager_id}</Card.Description>

                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>
        </>
    )

}

export default BranchDirectory;