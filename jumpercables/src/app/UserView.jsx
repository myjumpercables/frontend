import React, { Component } from 'react';
import { Cars } from './Cars';

export class UserView extends Component {
    state = {
        UserId: "",
    }

    searchUser(user) {

    }

    render() {
        return(
            <>
                {<Cars></Cars>}
                Hey
            </>
        );
    }
};