import React, { Component } from 'react';
import { OfflineView } from './OfflineView';
import { OnlineView } from './OnlineView';
import { User } from '../api'
import { Services } from './Services';

export class Main extends Component {
    user = new User();
    
    state= {
        login: false,
    }
    
    onSetLogin(loginData) {
        this.user.login(loginData)
        .then(()=> {
            localStorage.setItem('login', "true");
        })
    }

    onSetLogout() {
        localStorage.removeItem('login');
    }

    render() {
        if(true) {
            return <Services></Services>
        }
        return(
            <>
            {!this.state.login && <OfflineView onSetLogin={e => this.onSetLogin(e)}></OfflineView>}
            {this.state.login && <OnlineView onSetLogout={e => this.onSetLogout(e)}></OnlineView>}
            </>
        )
    }
}