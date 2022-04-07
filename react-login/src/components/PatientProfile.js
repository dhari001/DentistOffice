import React, { Component } from 'react'
import { Container, Form, Button, Grid, Input, Select, List } from 'semantic-ui-react'
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
        didUpdate: false,
        id: "",
        email: "",
        firstName: "",
        middleName: "",
        lastName: "",
        addressId: "",
        buildingNumber: "",
        street: "",
        city: "",
        province: "",
        postalcode: "",
        dob: "",
        mode: "view"
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

        try {
            this.setState({
                id: (this.props.profile).id,
                email: (this.props.profile).email,
                firstName: (this.props.profile).profile.firstName,
                middleName: (this.props.profile).profile.middleName,
                lastName: (this.props.profile).profile.lastName,
                buildingNumber: (this.props.profile).profile.address.buildingNumber,
                street: (this.props.profile).profile.address.street,
                city: (this.props.profile).profile.address.city,
                province: (this.props.profile).profile.address.province,
                postalcode: (this.props.profile).profile.address.postalCode,
                dob: (this.props.profile).profile.dob
            })
    
            console.log(this.state)
        } catch {
            console.log("waiting on props")
        }
    }

    componentDidUpdate() {

        if (this.props.profile != undefined && this.state.didUpdate == false) {
            this.componentDidMount()
            this.setState({didUpdate: true})
        }
    }

    render() {

        return (
            
            <>
            <Container>

                { this.state.mode === "view" ?
                
                <Grid columns={2}>
                    <Grid.Column width={5} float='right'>
                        <List>
                            <List.Item header='ID' description={(this.state).id}/>
                            <List.Item header='First Name' description={(this.state).firstName}/>
                            <List.Item header='Middle Name' description={(this.state).middleName}/>
                            <List.Item header='Last Name' description={(this.state).lastName}/>
                        </List>
                        
                    </Grid.Column>
                    <Grid.Column>
                        <List>
                            <List.Item header='Date of Birth' description={(this.state).dob}/>
                            <List.Item header='Address' description={(this.state).buildingNumber+" "+(this.state).street+", "+(this.state).city+" ("+(this.state).province+")"}/>
                            <List.Item header='Postal Code' description={(this.state).postalcode}/>
                            <List.Item header='Email' description={(this.state).email}/>
                        </List>
                    </Grid.Column>

                </Grid>
                
                :
                <Form>
                <Grid columns={2} divided stackable>
                    <Grid.Column width={5}>
                    <Form.Input label='ID' placeholder={(this.state).id} disabled/>
                        <Form.Input label='First Name' placeholder={(this.state).firstName}/>
                        <Form.Input label='Middle Name' placeholder={(this.state).middleName}/>
                        <Form.Input label='Last Name' placeholder={(this.state).lastName}/>
                    </Grid.Column>
                    <Grid.Column>
                        <Form.Group>
                            <Form.Input label='Building No.' placeholder={(this.state).buildingNumber} width={3}/>
                            <Form.Input label='Street' placeholder={(this.state).street}/>
                            <Form.Input label='City' placeholder={(this.state).city}/>
                            <Form.Select options={provinceSelectOptions} label='Province' placeholder={(this.state).province} width={1}/>
                        </Form.Group>
                        <Form.Input label='Postal Code' placeholder={(this.state).postalcode}/>
                        <Form.Input label='Email' placeholder={(this.state).email}/>
                    </Grid.Column>

                </Grid>
                </Form>
                
                }

            </Container>

            <br></br>

            { this.state.mode === 'view' ?
            <Button onClick={() => this.handleModeChange()}>Modify profile</Button>
            :
            <Button onClick={() => this.handleModeChange()}>Save changes</Button>
            }
            </>
        )

    }
}