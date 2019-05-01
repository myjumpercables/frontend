import React, { Component } from 'react';
import './styles/OnlineView.css'
import { UserPage } from './UserPage';

import { Route } from 'react-router-dom';

export class UserLanding extends Component {
    state = {
        //TODO: these should be based on props
        userType: "user",
        username: "YourCompanyHere",
        navbarState: false,
    }

    toggleNavbarState() {
        this.setState(prevState => ({
            navbarState: !prevState.navbarState,
        }))
    }

    render() {
        return (
            <>
            <Route 
                render={(props) => <UserPage {...props}
                type="user"
                navbarState={this.state.navbarState}
                toggleNavbarState={e => this.toggleNavbarState(e)}></UserPage>}/>
            </>
        );
    }
  }