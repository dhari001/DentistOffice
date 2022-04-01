import React, {useEffect, useState} from 'react'
import {Header} from 'semantic-ui-react'
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
            {branches.map((el) => (
                <article key={el.id}>
                    <Link to={`/branch/${el.id}`}>
                        <Header as='h3'>{el.address_id}</Header>
                    </Link>
                </article>
            ))}
        </>
    )

}

export default BranchDirectory;