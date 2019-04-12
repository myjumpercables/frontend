import React, { Component } from 'react';
import './styles/OnlineView.css'
import { OnlineViewHeader } from './OnlineViewHeader';
import { CompanyView } from './CompanyView';
import { UserView } from './UserView';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export class OnlineView extends Component {
    state = {
        //TODO: these should be based on props
        userType: "company",
        username: "YourCompanyHere",
        userId: "",
    }
    render() {
        return (
            <Router>
            <OnlineViewHeader userType={this.state.userType} username={this.state.username}></OnlineViewHeader>
            {this.state.userType === "company" && 
                <Route 
                    path="/user/:userid" 
                    render={(props) => <CompanyView {...props} username={this.state.username}/>} 
                />
                //<CompanyView username={this.state.username}></CompanyView>
            }
            {!(this.state.userType === "company") && <UserView></UserView>}
            </Router>
        );
    }
  }