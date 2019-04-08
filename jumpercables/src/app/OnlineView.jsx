import React, { Component } from 'react';
import './styles/OnlineView.css'
import { OnlineViewHeader } from './OnlineViewHeader';
import { CompanyView } from './CompanyView';
import { UserView } from './UserView';

export class OnlineView extends Component {
    state = {
        userType: "user",
        username: "YourCompanyHere",
    }
    
    render() {
        return (
            <>
            <OnlineViewHeader userType={this.state.userType} username={this.state.username}></OnlineViewHeader>
            {this.state.userType === "company" && <CompanyView username></CompanyView>}
            {this.state.userType !== "user" && <UserView></UserView>}
            </>
        );
    }
  }