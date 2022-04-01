import React, {Component} from 'react'
import {Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default class NavBar extends Component {
    state = {};

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
    }

    render() {
        const { activeItem } = this.state


    return (
        <Menu>
            <Menu.Item
                header
                link='true' href='/'
            > Struck By Whitening
            </Menu.Item>
            <Menu.Item
                name='editorials'
                active={activeItem === 'editorials'}
                onClick={this.handleItemClick}
                link='true' href='/dentist'
            >
                Dentist
            </Menu.Item>

            <Menu.Item
                name='reviews'
                active={activeItem === 'reviews'}
                onClick={this.handleItemClick}
                link='true' href='/receptionist'
            >
                Receptionist
            </Menu.Item>

            <Menu.Item
                name='upcomingEvents'
                active={activeItem === 'upcomingEvents'}
                onClick={this.handleItemClick}
                link='true' href='/branch'
            >
                Branch
            </Menu.Item>
        </Menu>
    );
    }
}