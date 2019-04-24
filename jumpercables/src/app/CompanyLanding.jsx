import React, { Component } from 'react';
import  { UserPage } from './UserPage';
import { Route } from 'react-router-dom';

export class CompanyLanding extends Component {
    
    constructor() {
        super() 
        this.state = {
            user: JSON.parse(localStorage.getItem("user")),
            navbarState: false
        }
    }

    toggleNavbarState() {
        this.setState(prevState => ({
            navbarState: !prevState.navbarState,
        }))
    }

    searchUser(user) {

    }

    render() {
        return(
            <>
            <Route 
                render={(props) => <UserPage {...props} 
                navbarState={this.state.navbarState}
                type="company"
                toggleNavbarState={e => this.toggleNavbarState(e)}
                username={this.state.user.username}></UserPage>}/>
            </>
        );
    }
};