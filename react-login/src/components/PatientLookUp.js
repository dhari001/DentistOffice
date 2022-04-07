import React, { Component } from 'react'
import { Form, Segment, Input, Button, Header } from 'semantic-ui-react'
import axios from "axios"

import Patient from '../pages/Patient'

export default class PatientLookUp extends Component {

    state = {
        users: [],
        searchVal: '',
        showSearch: true,
        selectedUser: ''
    }

    componentDidMount() {
        axios.get('http://localhost:8080/profile/findAll')
            .then(res => {
                const persons = res.data;
                this.setState({
                    users: persons
                });
                console.log(this.state.users)
            })
    }

    render() {
        return(
            <>
            <Header as='h4'>Patient Look Up</Header>
            { this.state.showSearch ?
                (<>
                    <Form.Field
                    control={Input}
                    placeholder='Search for patient by ID'
                    onChange={(e, search) => this.setState({searchVal: search.value})}
                    width={5}
                    icon='search'
                    />
                    <Segment>
                        { this.state.searchVal != '' &&
                        (this.state.users).filter(user => (user.id).includes((this.state.searchVal).toUpperCase()))
                            .map(match => { return (
                                <Segment key={(match.id)}>
                                    <Header as='h4'>{match.firstName+" "+match.middleName+" "+match.lastName}</Header>
                                    <p>{"Patient ID: "+match.id}</p>
                                    <p>{"Date of Birth: "+(match.dob).substring(0, 10)}</p>

                                    <Button content="see full profile" onClick={() => this.setState({...this.state, showSearch: false, selectedUser: match.username})}/>
                                </Segment>
                            )})
                        }
                    </Segment>

                </>)
                :
                (<>
                    <Button content="return to search" onClick={() => this.setState({...this.state, showSearch: true, selectedUser: ''})}/>
                    <Patient username={this.state.selectedUser}/>
                </>)
            }
            
            </>
        )
    }
    
}