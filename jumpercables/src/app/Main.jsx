import React, { Component } from 'react';
import { CompanyLanding } from './CompanyLanding';
import { UserLanding } from './UserLanding';
import { userRepository } from '../api'
import { Landing } from './Landing';
import { PrivateRoute } from '../_components';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

export class Main extends Component {
    user = new userRepository();
    
    state= {
        login: false,
    }
    
    onSetLogin(loginData) {
        this.setState({ login: true })
    }

    onSetLogout() {
        console.log("hit")
        localStorage.removeItem('user');
    }

    render() {
        if(true) {
            return (
                <Router>
                    <Switch>
                        <PrivateRoute path="/user" component={UserLanding}></PrivateRoute>
                        <PrivateRoute path="/company" component={CompanyLanding}></PrivateRoute>
                        <Route path="/landing" render={(props) => <Landing {...props} redirect={this.state.redirect} onSetLogout={e => this.onSetLogout()}></Landing>}/>
                        <Redirect to="/landing"/>
                    </Switch>
                </Router>
            )
        }
    }
}