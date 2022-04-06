import React, {useState} from 'react'
import {Form, Button} from 'semantic-ui-react'

    
function SearchForm({Search}){
    const [details, setDetails] = useState({empId: ""})

    const submitHandler = e => {
        e.preventDefault();
        Search(details);
        
    }

    return (
        <div className="Receptionist">
            <Form onSubmit={submitHandler}>
            <Form.Field>
                <label>Employee</label>
                <input
                    type="text"
                    name="empId"
                    id="empId"
                    onChange={e => setDetails({...details, empId: e.target.value})} value={details.empId}>
                </input>
            </Form.Field>
            <Button type='submit'>Search</Button>
            </Form>
        </div>
    );
}

export default SearchForm;