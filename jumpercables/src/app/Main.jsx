import React, { Component } from 'react';
import { OfflineView } from './OfflineView';
import { OnlineView } from './OnlineView';
import { User } from '../api'
import { Services } from './Services';
import { Landing } from './Landing';
import { PrivateRoute } from '../_components';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

export class Main extends Component {
    user = new User();
    
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
                        <PrivateRoute path="/user/:userid" component={OnlineView}></PrivateRoute>
                        <Route path="/landing" render={(props) => <Landing {...props} redirect={this.state.redirect} onSetLogin={e => this.onSetLogin(e)}></Landing>}/>
                        <Redirect to="/landing"/>
                    </Switch>
                </Router>
            )
        }
        return(
            <>
            {!this.state.login && <OfflineView onSetLogin={e => this.onSetLogin(e)}></OfflineView>}
            {this.state.login && <OnlineView onSetLogout={e => this.onSetLogout(e)}></OnlineView>}
            </>
        )
    }
}