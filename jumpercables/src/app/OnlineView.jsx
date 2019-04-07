import React, { Component } from 'react';
import './styles/OnlineView.css'
import { OnlineViewHeader } from './OnlineViewHeader';
import { CompanyView } from './CompanyView';

export class OnlineView extends Component {
    state = {
        userType: "company",
        username: "YourCompanyHere",
    }
    
    render() {
        return (
            <>
            <OnlineViewHeader userType={this.state.userType} username={this.state.username}></OnlineViewHeader>
            {this.state.userType === "company" && <CompanyView username></CompanyView>}
            </>
        );
    }
  }