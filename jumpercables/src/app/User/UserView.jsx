import React, { Component } from 'react';
import { Cars } from '../Cars/Cars';
import { Repair } from './Repair'

export class UserView extends Component {
    state = {
        UserId: "",
    }

    searchUser(user) {

    }

    render() {
        return(
            <>
                {<Repair></Repair>}
            </>
        );
    }
};