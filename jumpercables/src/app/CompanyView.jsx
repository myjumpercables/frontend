import React, { Component } from 'react';
import { CompanyViewSearch } from './CompanyViewSearch';

export class CompanyView extends Component {
    state = {
    }

    searchUser(user) {

    }

    render() {
        return(
            <>
                <CompanyViewSearch searchUser={e => this.searchUser(e)}></CompanyViewSearch>
                <hr/>
            </>
        );
    }
};