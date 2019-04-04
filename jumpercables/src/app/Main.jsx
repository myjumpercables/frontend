import React, { Component } from 'react';
import { OfflineView } from './OfflineView';
import { OnlineView } from './OnlineView';

export class Main extends Component {
    state= {
        login: false
    }
    render() {
        return(
            <>
            {!this.state.login && <OfflineView></OfflineView>}
            {this.state.login && <OnlineView></OnlineView>}
            </>
        )
    }
}