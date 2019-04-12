import React, { Component } from 'react';
import { OfflineView } from './OfflineView';
import { OnlineView } from './OnlineView';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

export class Main extends Component {
    state= {
        login: false,
        activeUsername: "",
        activeUserId: "3129842914029",
    }

    onLogin(e) {
        this.setState({login: true});
    }

    onLogout(e) {

    }

    render() {
        return (
        <Router>
            {!this.state.login &&
                <Route render={(props) => <OfflineView {...props} onLogin={e => this.onLogin(e)} />} />
            }
            {this.state.login && 
            <div>
                <Switch>
                <Route path={`/user/${this.state.activeUserId}`} render={(props) => <OnlineView {...props} onLogout={e => this.onLogout(e)} activeUsername={this.state.activeUsername}/>}/>
                <Redirect to={`/user/${this.state.activeUserId}`} />
                </Switch>
            </div>    
            }
        </Router>
        )
    }
}