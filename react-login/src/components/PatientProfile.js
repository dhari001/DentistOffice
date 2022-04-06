import React, { Component } from 'react'
import { Segment, Form, Button, Grid, Input, Select, Header } from 'semantic-ui-react'
import axios from "axios"

const provinceSelectOptions = [
    { key: 'ab', text: 'AB', value: 'AB' },
    { key: 'bc', text: 'BC', value: 'BC' },
    { key: 'mn', text: 'MN', value: 'MN' },
    { key: 'nb', text: 'NB', value: 'NB' },
    { key: 'ns', text: 'NS', value: 'NS' },
    { key: 'nl', text: 'NL', value: 'NL' },
    { key: 'nwt', text: 'NWT', value: 'NWT' },
    { key: 'on', text: 'ON', value: 'ON' },
    { key: 'pei', text: 'PEI', value: 'BC' },
    { key: 'qb', text: 'QB', value: 'QB' },
    { key: 'sk', text: 'SK', value: 'SK' },
    { key: 'yt', text: 'YT', value: 'YT' }
]

export default class PatientProfile extends Component {

    state = {
        id: "",
        firstName: "",
        middleName: "",
        lastName: "",
        buildingNumber: "",
        street: "",
        city: "",
        province: "",
        postalcode: "",
        dob: "",
        mode: ""
    }

    handleModeChange() {

        if (this.state.mode == 'view') {
            this.setState({...this.state, mode: 'modify'})
        } else if (this.state.mode == 'modify'){
            this.setState({...this.state, mode: 'view'})
            console.log("implement sending info to db")
        }

    }

    componentDidMount() {
        // get basic profile
        axios.get('http://localhost:8080/profile/findByUsername', { params: { username: this.props.username } })
        .then(res1 => {

            const userInfo = res1.data;

            axios.get('http://localhost:8080/address/findByID', { params: { id: userInfo.addressId } })
            .then(res2 => {

                const address = res2.data;

                this.setState({
                    id: userInfo.id,
                    firstName: userInfo.firstName,
                    middleName: userInfo.middleName,
                    lastName: userInfo.lastName,
                    buildingNumber: address.buildingNumber,
                    street: address.street,
                    city: address.city,
                    province: address.province,
                    postalcode: address.postalCode,
                    dob: (userInfo.dob).substring(0, 10),
                    mode: "view"
                })

                console.log(this.state)
            })
        })
    }

    render() {
        return (
            <>
            <Segment placeholder>

                <Form>
                { this.state.mode === "view" ?

                <Grid columns={2} divided stackable>
                    <Grid.Column width={5} float='right'>
                        <Header as='h4'>ID</Header>
                        <p>{(this.state).id}</p>
                        <Header as='h4'>First Name</Header>
                        <p>{(this.state).firstName}</p>
                        <Header as='h4'>Middle Name</Header>
                        <p>{(this.state).middleName}</p>
                        <Header as='h4'>Last Name</Header>
                        <p>{(this.state).lastName}</p>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h4'>Date of Birth</Header>
                        <p>{this.state.dob}</p>

                        <Header as='h4'>Address</Header>
                        <p>{(this.state).buildingNumber} {(this.state).street}, {this.state.city} ({this.state.province})</p>

                        <Header as='h4'>Postal Code</Header>
                        <p>{(this.state).postalcode}</p>
                    </Grid.Column>

                </Grid>
                
                :

                <Grid columns={2} divided stackable>
                    <Grid.Column width={5}>
                        <Form.Field control={Input} label='First Name' value={(this.state).firstName}/>
                        <Form.Field control={Input} label='Middle Name' value={(this.state).middleName}/>
                        <Form.Field control={Input} label='Last Name' value={(this.state).lastName}/>
                    </Grid.Column>
                    <Grid.Column>
                        <Form.Group>
                            <Form.Field control={Input} label='Building No.' value={(this.state).buildingNumber} width={3}/>
                            <Form.Field control={Input} label='Street' value={(this.state).street}/>
                            <Form.Field control={Input} label='City' value={(this.state).city}/>
                            <Form.Field control={Select} label='Province' options={provinceSelectOptions} value={(this.state).province} width={1}/>
                        </Form.Group>
                        <Form.Field control={Input} label='Postal Code' value={(this.state).postalcode}/>
                    </Grid.Column>

                    
                </Grid>
                
                }

                </Form>

            </Segment>

            { this.state.mode === 'view' ?
            <Button onClick={() => this.handleModeChange()}>Modify profile</Button>
            :
            <Button onClick={() => this.handleModeChange()}>Save changes</Button>
            }
            </>
        )

    }
}