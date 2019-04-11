import React, { Component } from 'react';
import { OfflineView } from './OfflineView';
import { OnlineView } from './OnlineView';

export class Main extends Component {
    state= {
        login: false
    }

    onLogin(e) {
        this.setState({login: true});
    }

    onLogout(e) {

    }

    render() {
        return(
            <>
            {!this.state.login && <OfflineView onLogin={e => this.onLogin(e)}></OfflineView>}
            {this.state.login && <OnlineView offLogin={e => this.offLogout(e)}></OnlineView>}
            </>
        )
    }
}