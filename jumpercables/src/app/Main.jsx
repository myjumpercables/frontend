import React, { Component } from 'react';
import { CompanyLanding } from './CompanyLanding';
import { UserLanding } from './UserLanding';
import { userRespository } from '../api'
import { Landing } from './Landing';
import { PrivateRoute } from '../_components';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

export class Main extends Component {
    user = new userRespository();
    
    state= {
        login: false,
    }
    
    onSetLogin(loginData) {
        this.setState({ login: true })
    }

    onSetLogout() {
        localStorage.removeItem('login');
    }

    render() {
        if(true) {
            return (
                <Router>
                    <Switch>
                        <PrivateRoute path="/user" component={UserLanding}></PrivateRoute>
                        <PrivateRoute path="/company" component={CompanyLanding}></PrivateRoute>
                        <Route path="/landing" render={(props) => <Landing {...props} redirect={this.state.redirect} onSetLogin={e => this.onSetLogin(e)}></Landing>}/>
                        <Redirect to="/landing"/>
                    </Switch>
                </Router>
            )
        }
    }
}