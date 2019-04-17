import React, { Component } from 'react';
import './styles/OnlineView.css'
import { OnlineViewHeader } from './OnlineViewHeader';
import { CompanyView } from './CompanyView';
import { UserView } from './UserView';
import { UserPage } from './UserPage';

import { Route } from 'react-router-dom';

export class OnlineView extends Component {
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
                render={(props) => <OnlineViewHeader {...props}
                    style={{zIndex: 100}}
                    toggleNavbarState={e => this.toggleNavbarState(e)} 
                    navbarState={this.state.navbarState} 
                    userType={this.state.userType} 
                    username={this.state.username}/>}/>
            <Route 
                render={(props) => <UserPage {...props} 
                navbarState={this.state.navbarState}
                toggleNavbarState={e => this.toggleNavbarState(e)}></UserPage>}/>
    
            {this.state.userType === "company" && <CompanyView username></CompanyView>}
            </>
        );
    }
  }