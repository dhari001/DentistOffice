import React, { Component } from 'react'
import { Container, Grid, Header } from 'semantic-ui-react'
import axios from "axios"

const Appointment = (props) => {
    return (
        <Container>
            <Grid columns={3} divided>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column><Header as='h4'>Date</Header></Grid.Column>
                            <Grid.Column><p></p></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column><Header as='h4'>Type</Header></Grid.Column>
                            <Grid.Column><p></p></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column><Header as='h4'>Status</Header></Grid.Column>
                            <Grid.Column><p></p></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column><Header as='h4'>Branch</Header></Grid.Column>
                            <Grid.Column><p></p></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column><Header as='h4'>Attending Staff</Header></Grid.Column>
                            <Grid.Column><p></p></Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>

                <Grid.Column>

                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default class MedHistory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appointments: [],
            procedures: [],
            treatments: [],
            compiledInfo: []
        }
    }

    componentDidMount() {
        
        axios.get('http://localhost:8080/appointment/findByPatientId', { params: { id: this.props.id } })
            .then(app_res => {
                const app = app_res.data;
                console.log(app);

                // get appointment IDs
                const appIds = [];
                app.forEach(a => {
                    appIds.push(a.id)
                })
                console.log(appIds)

                // get all procedures
                axios.get('http://localhost:8080/procedure/findAll')
                .then(pro_res => {
                    // this is a list of all procedures
                    const pro = (pro_res.data).filter(procedure => appIds.includes(procedure.appointmentId));
                    console.log(pro)

                    this.setState({
                        appointments: app,
                        procedures: pro
                    }).catch(e => {
                        console.log("no treatments found")
                    })

                }).catch(e => {
                    console.log("no procedures found")
                })

                
            }).catch(e => {
                console.log("no appointments found")
            })

        // get all treatments
        /*this.state.procedures.forEach( procedure => {
            axios.get('http://localhost:8080/treatment/findByProcedureId', {params: { id: procedure.id} })
            .then(trt_res => {
                const trt = trt_res.data
                console.log(trt)

                this.setState({
                    treatments: trt
                })

            })
        })

        // sort info by appointment
        const sorted = [];
        const procedures = [];
        const treatments = [];

        (this.state.appointments).forEach( appt => {
            (this.state.procedures).forEach( procedure => {
                treatments = (this.state.treatments).filter(t => t.procedureId == procedure.id)
                procedures.push((procedure.id,treatments))
            })
            sorted.push((appt, procedures))
        })

        console.log(sorted)

        this.setState({
            compiledInfo: sorted
        })*/
    }

    render() {
        return (
            <h1>medical history</h1>
        )
    }
    
}