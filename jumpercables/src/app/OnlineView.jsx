import React, { Component } from 'react';
import './styles/OnlineView.css'
import { OnlineViewHeader } from './OnlineViewHeader';

export class OnlineView extends Component {
    state = {
        userType: "company",
        userName: "YourCompanyHere",
    }
    
    render() {
        return (
            <OnlineViewHeader userType={this.state.userType} userName={this.state.userName}></OnlineViewHeader>
        );
    }
  }